// SECURE VERSION - No real credentials exposed
const CONFIG = {
    // Demo configuration - replace with environment variables in production
    COSMOS_ENDPOINT: 'https://your-cosmos-db.documents.azure.com:443/',
    COSMOS_KEY: 'KEY_FROM_AZURE_PORTAL', // Not the real key!
    DATABASE_NAME: 'VisitorManagement',
    
    CONTAINERS: {
        VISITORS: 'Visitors',
        QR_TOKENS: 'QRTokens', 
        USERS: 'Users'
    },
    
    COLLEGE_NAME: 'Rajalakshmi Engineering College',
    ADMIN_EMAIL_DOMAIN: '@rajalakshmi.edu.in',
    QR_EXPIRY_HOURS: 48,
    QR_MAX_USES: 2
};

// Demo Mode - Using localStorage (secure for student demo)
class VisitorDB {
    static saveVisitor(visitorData) {
        const visitors = JSON.parse(localStorage.getItem('visitors') || '[]');
        visitors.push(visitorData);
        localStorage.setItem('visitors', JSON.stringify(visitors));
        console.log('✅ Visitor saved (demo mode):', visitorData.name);
    }
    
    static getVisitors() {
        return JSON.parse(localStorage.getItem('visitors') || '[]');
    }
    
    static saveQRToken(tokenData) {
        const tokens = JSON.parse(localStorage.getItem('qrTokens') || '[]');
        tokens.push(tokenData);
        localStorage.setItem('qrTokens', JSON.stringify(tokens));
        console.log('✅ QR Token saved (demo mode):', tokenData.token);
    }
    
    static getQRTokens() {
        return JSON.parse(localStorage.getItem('qrTokens') || '[]');
    }
    
    static findQRToken(token) {
        const tokens = this.getQRTokens();
        return tokens.find(t => t.token === token);
    }
}

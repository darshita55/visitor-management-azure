// Azure Cosmos DB Configuration
const CONFIG = {
    // Replace these with your actual values from Azure Portal
    COSMOS_ENDPOINT: 'https://visitor-cosmosdb-darsh.documents.azure.com:443/',
    COSMOS_KEY: '3JufJwLSFk76hFdfjMmDgvMoNUQUE5PqAwwDbktafv5WIbIcXYWmB65dOueLDxNqlAkjyyyuNx4OACDbuU9kCg==',
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

// Simple database functions using localStorage (for demo)
class VisitorDB {
    static saveVisitor(visitorData) {
        const visitors = JSON.parse(localStorage.getItem('visitors') || '[]');
        visitors.push(visitorData);
        localStorage.setItem('visitors', JSON.stringify(visitors));
        console.log('Visitor saved:', visitorData);
    }

    static getVisitors() {
        return JSON.parse(localStorage.getItem('visitors') || '[]');
    }

    static saveQRToken(tokenData) {
        const tokens = JSON.parse(localStorage.getItem('qrTokens') || '[]');
        tokens.push(tokenData);
        localStorage.setItem('qrTokens', JSON.stringify(tokens));
        console.log('QR Token saved:', tokenData);
    }

    static getQRTokens() {
        return JSON.parse(localStorage.getItem('qrTokens') || '[]');
    }

    static findQRToken(token) {
        const tokens = this.getQRTokens();
        return tokens.find(t => t.token === token);
    }
}

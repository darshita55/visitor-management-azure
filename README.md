# visitor-management-azure
Cloud Computing Project
 Visitor Management System - Azure Cloud Implementation

Project Overview:
A comprehensive visitor management system built for Rajalakshmi Engineering College using Azure cloud services, containerization, and DevOps automation.

Features:
- QR code-based visitor registration
- Real-time admin dashboard  
- Containerized deployment
- Kubernetes orchestration
- CI/CD pipeline automation
- Infrastructure as Code

 Technology Stack:
Frontend: HTML5, CSS3, JavaScript
Containerization: Docker, Kubernetes
Cloud Platform: Microsoft Azure
DevOps: GitHub Actions, Terraform
Container Registry: Azure Container Registry (ACR)
Orchestration: Azure Kubernetes Service (AKS)

Project Structure:
visitor-management-azure/
├── index.html # Visitor registration page
├── admin.html # Admin dashboard (to be added)
├── generate-qr.html # QR code generator (to be added)
├── Dockerfile # Container configuration
├── terraform/ # Infrastructure as Code
│ └── main.tf
├── k8s/ # Kubernetes manifests
│ └── deployment.yaml
├── .github/workflows/ # CI/CD pipelines
│ └── deploy.yml
├── docs/ # Documentation
└── scripts/ # Deployment scripts

Prerequisites:
- Docker Desktop
- Azure CLI
- kubectl

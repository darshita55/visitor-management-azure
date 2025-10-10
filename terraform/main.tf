# Configure Terraform and Azure Provider
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>3.0"
    }
  }
}

provider "azurerm" {
  features {}
}

# Create Resource Group
resource "azurerm_resource_group" "visitor_rg" {
  name     = "visitor-management-rg"
  location = "East US"
  
  tags = {
    environment = "demo"
    project     = "visitor-management"
  }
}

# Create Container Registry  
resource "azurerm_container_registry" "visitor_acr" {
  name                = "visitoracr2025"
  resource_group_name = azurerm_resource_group.visitor_rg.name
  location           = azurerm_resource_group.visitor_rg.location
  sku                = "Basic"
  admin_enabled      = true

  tags = {
    environment = "demo"
  }
}

# Create AKS Cluster
resource "azurerm_kubernetes_cluster" "visitor_aks" {
  name                = "visitor-aks-cluster"
  location            = azurerm_resource_group.visitor_rg.location
  resource_group_name = azurerm_resource_group.visitor_rg.name
  dns_prefix         = "visitor-aks"

  default_node_pool {
    name       = "default"
    node_count = 1
    vm_size    = "Standard_B2s"
  }

  identity {
    type = "SystemAssigned"
  }

  tags = {
    environment = "demo"
  }
}

# Output values
output "resource_group_name" {
  value = azurerm_resource_group.visitor_rg.name
}

output "acr_login_server" {
  value = azurerm_container_registry.visitor_acr.login_server
}

output "aks_cluster_name" {
  value = azurerm_kubernetes_cluster.visitor_aks.name
}

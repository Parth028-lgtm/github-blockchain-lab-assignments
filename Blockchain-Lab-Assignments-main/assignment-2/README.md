# 📦 Assignment 2: Deploy Smart Contract on Polygon Testnet

## 📌 Brief Description
In this assignment, the previously developed **ProductTransaction smart contract** is deployed on the **Polygon Amoy Testnet**.  
This demonstrates how blockchain applications can be deployed on scalable networks with lower transaction costs.

---

## 🛠️ Tech Stack Used
- Solidity (0.8.x)  
- Remix IDE  
- MetaMask  
- Polygon Amoy Testnet  

---

## 🚀 Steps to Execute

### ▶️ Step 1: Setup Polygon Network in MetaMask
- Open MetaMask  
- Go to Settings → Networks → Add Network  
- Enter:
  - Network Name: Polygon Amoy  
  - RPC URL: https://rpc-amoy.polygon.technology/  
  - Chain ID: 80002  
  - Currency Symbol: POL  

---

### ▶️ Step 2: Get Test Tokens
- Use Polygon Faucet or third-party faucet  
- Enter wallet address and request POL tokens  

---

### ▶️ Step 3: Deploy Smart Contract
1. Open Remix IDE  
2. Paste `contract.sol` code  
3. Compile the contract  
4. Go to **Deploy & Run Transactions**  
5. Select **Injected Provider - MetaMask**  
6. Ensure MetaMask is connected to **Polygon Amoy**  
7. Click **Deploy** and confirm transaction  

---

## 🧪 Smart Contract Functions

### 🔹 addProduct(uint id, string name)
- Adds a new product to blockchain  

### 🔹 getProduct(uint id)
- Returns product name and owner  

### 🔹 transferProduct(uint id, address to)
- Transfers ownership of product  

---

## 📍 Contract Address
0xC94c72C1371dd37605130C15659D82917082ca28
# Assignment 1: Smart Contract Development

##  Student Details
Name: YOUR NAME  
Roll No: YOUR ROLL NO  
Course: Blockchain Technology Lab  

---

##  Objective
To design, implement, and deploy a smart contract on a blockchain network using Solidity.

---

##  Problem Statement
Develop a smart contract that manages product transactions, allowing users to add products, transfer ownership, and retrieve product details in a decentralized manner.

---

##  Contract Description
The smart contract represents a simple product management system on the blockchain. Each product has:
- Unique ID
- Name
- Owner address

The contract ensures:
- Only the owner can transfer ownership
- All transactions are transparent and secure

---

##  Functions Explanation

### 🔹 addProduct(uint id, string name)
- Adds a new product to the blockchain
- The sender becomes the owner

### 🔹 transferProduct(uint id, address to)
- Transfers ownership of a product
- Only current owner can execute this

### 🔹 getProduct(uint id)
- Returns product name and owner address
- Read-only function (no gas required)

---

##  Technologies Used
- Solidity
- Remix IDE
- Ethereum Blockchain
- MetaMask (optional)

---

##  Steps to Compile and Deploy

1. Open Remix IDE
2. Create `contract.sol`
3. Paste smart contract code
4. Compile using Solidity compiler
5. Deploy using:
   - Remix VM (local testing) OR
   - Injected Provider (MetaMask)
6. Interact with functions:
   - addProduct
   - transferProduct
   - getProduct

---

##  Screenshots Included
- Compilation success
- Contract deployment
- Function execution output

---

##  Conclusion
This assignment demonstrates how smart contracts automate transactions without intermediaries. It ensures security, transparency, and decentralization in managing product ownership.

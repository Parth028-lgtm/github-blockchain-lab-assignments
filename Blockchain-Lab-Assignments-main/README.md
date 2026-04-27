# Blockchain Lab Assignments

## Student Information

- **Student Name:** Yash Chavan
- **Roll Number:** 123B1B105
- **Course Name:** Blockchain Technology

---

A collection of blockchain development assignments covering smart contracts, Web3 integration, IPFS storage, and DAO implementation.

## Assignments

### Assignment 1: MessageStore Smart Contract
Simple Solidity smart contract to store and retrieve messages on the blockchain.

- **Network:** Sepolia Testnet
- **Tech Stack:** Solidity, Remix IDE, MetaMask
- **Brief Description:** Implements a MessageStore contract with state variable, constructor, getter/setter functions, and event logging for message updates.
- **How to Run:**
  1. Open Remix IDE and create/open `contract.sol`
  2. Compile the contract
  3. Go to **Deploy & Run Transactions**, select **Browser Extension (MetaMask)**
  4. Connect MetaMask wallet and select **Sepolia Testnet**
  5. Enter initial message and click **Deploy**, approve in MetaMask
- **Commands:** None (Remix IDE handles compilation/deployment)

[Details](assignment-1/README.md)

---

### Assignment 2: Deploy on Polygon
Deploy the MessageStore contract on Polygon Amoy Testnet.

- **Network:** Polygon Amoy
- **Tech Stack:** Solidity, Remix IDE, MetaMask, Polygon Amoy Testnet
- **Brief Description:** Deploys the MessageStore contract on Polygon Amoy Testnet to demonstrate improved scalability and lower transaction costs.
- **How to Run:**
  1. Add Polygon Amoy network to MetaMask (RPC: `https://rpc-amoy.polygon.technology/`, Chain ID: `80002`)
  2. Get test POL from https://faucet.polygon.technology/
  3. Open Remix IDE, open `contract.sol`, and compile
  4. Select **Browser Extension (MetaMask)** and deploy with **Polygon Amoy** selected
  5. Confirm transaction in MetaMask
- **Commands:** None (Remix IDE handles compilation/deployment)

[Details](assignment-2/README.md)

---

### Assignment 3: Web Interface
Build a DApp with a web interface to interact with the smart contract.

- **Network:** Sepolia Testnet
- **Tech Stack:** HTML, CSS, ethers.js, MetaMask, Solidity, Remix IDE
- **Brief Description:** A Product Transaction DApp where users connect MetaMask, enter product details, send transactions to the blockchain, and retrieve stored data.
- **How to Run:**
  1. Ensure files are in the same folder: `index.html`, `style.css`, `app.js`, `ethers.js`
  2. Start local server: `python -m http.server 3000`
  3. Open `http://127.0.0.1:3000` in browser
  4. Click **Connect Wallet** and approve in MetaMask
  5. Enter details and click **Send Transaction**, confirm in MetaMask
- **Commands:** `python -m http.server 3000`

[Details](assignment-3/README.md)

---

### Assignment 4: IPFS Storage
Decentralized file storage using IPFS and Pinata.

- **Tech Stack:** HTML, CSS, JavaScript, IPFS, Pinata API
- **Brief Description:** Decentralized file storage where users upload files via a web interface, files are stored on IPFS using Pinata, and each upload generates a unique CID (Content Identifier) for retrieval.
- **How to Run:**
  1. Open `index.html` in browser (or use Live Server)
  2. Upload a file using "Upload to IPFS"
  3. Copy the generated CID
  4. Paste CID in "Retrieve File" and click "Fetch File"
- **Commands:** None (open in browser directly)

[Details](assignment-4/README.md)

---

### Assignment 5: DAO
Decentralized Autonomous Organization with proposal creation, voting, and execution.

- **Network:** Sepolia Testnet
- **Tech Stack:** Solidity, Remix IDE, MetaMask
- **Brief Description:** Implements a basic DAO with proposal creation (owner-only), voting mechanism (one vote per address), and proposal execution after deadline. All actions are recorded on-chain for transparency.
- **How to Run:**
  1. Open Remix IDE and compile `dao.sol`
  2. Go to **Deploy & Run Transactions**, select **Browser Extension (MetaMask)**
  3. Connect wallet and select **Sepolia Testnet**, deploy contract
  4. Create proposal: `createProposal("description", duration)`
  5. Vote: `vote(proposalID)`
  6. Wait for deadline, then execute: `executeProposal(proposalID)`
- **Commands:** None (Remix IDE handles contract interaction)

[Details](assignment-5/README.md)

---

## Quick Start

1. Install MetaMask browser extension
2. Get testnet ETH from faucets:
   - Sepolia: https://faucet.sepolia.io
   - Polygon: https://faucet.polygon.technology
3. Open the assignment folder and follow its README

## Project Structure

```
Blockchain-Lab-Assignments/
├── assignment-1/     # Smart contract basics (MessageStore)
├── assignment-2/       # Polygon deployment (Polygon Amoy)
├── assignment-3/       # Web3 frontend (DApp with ethers.js)
├── assignment-4/        # IPFS storage (Pinata)
├── assignment-5/       # DAO implementation
└── README.md           # This file
```

## Notes

- API keys in assignment-4 must be entered manually (not hardcoded)
- DAO functions (createProposal, executeProposal) are owner-only
- All smart contracts deployed on Sepolia Testnet (except Assignment 2 on Polygon Amoy)
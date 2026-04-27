let provider;
let signer;
let contract;

// ✅ Your contract address
const contractAddress = "0xC94c72C1371dd37605130C15659D82917082ca28";

// ✅ ABI
const abi = [
    "function addProduct(uint _id, string memory _name)",
    "function getProduct(uint _id) view returns (string memory, address)"
];

// 🔹 Connect Wallet (FIXED)
async function connectWallet() {
    try {
        if (!window.ethereum) {
            alert("Install MetaMask");
            return;
        }

        provider = new ethers.providers.Web3Provider(window.ethereum);

        // Request account access
        await provider.send("eth_requestAccounts", []);

        signer = provider.getSigner();
        contract = new ethers.Contract(contractAddress, abi, signer);

        const account = await signer.getAddress();
        document.getElementById("account").innerText = "Connected: " + account;

    } catch (error) {
        console.error("Connection Error:", error);
        alert("Connection Failed");
    }
}

// 🔹 Add Product
async function addProduct() {
    try {
        if (!contract) {
            alert("Connect wallet first!");
            return;
        }

        const id = document.getElementById("pid").value;
        const name = document.getElementById("pname").value;

        if (!id || !name) {
            alert("Enter product details");
            return;
        }

        const tx = await contract.addProduct(id, name);
        await tx.wait();

        alert("Product Added Successfully!");

    } catch (error) {
        console.error("Transaction Error:", error);
        alert("Transaction Failed");
    }
}

// 🔹 Get Product
async function getProduct() {
    try {
        if (!contract) {
            alert("Connect wallet first!");
            return;
        }

        const id = document.getElementById("gid").value;

        const data = await contract.getProduct(id);

        document.getElementById("output").innerText =
            "Name: " + data[0] + " | Owner: " + data[1];

    } catch (error) {
        console.error("Read Error:", error);
        alert("Error fetching data");
    }
}
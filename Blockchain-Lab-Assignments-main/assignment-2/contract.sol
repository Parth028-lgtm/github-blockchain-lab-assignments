// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductTransaction {

    struct Product {
        uint id;
        string name;
        address owner;
    }

    Product[] public products;

    event ProductTransferred(uint id, address from, address to);

    function addProduct(uint _id, string memory _name) public {
        products.push(Product(_id, _name, msg.sender));
    }

    function transferProduct(uint _id, address _to) public {
        for (uint i = 0; i < products.length; i++) {
            if (products[i].id == _id) {
                require(products[i].owner == msg.sender, "Not owner");
                
                address previousOwner = products[i].owner;
                products[i].owner = _to;

                emit ProductTransferred(_id, previousOwner, _to);
                break; // stops loop early (good practice)
            }
        }
    }

    function getProduct(uint _id) public view returns (string memory, address) {
        for (uint i = 0; i < products.length; i++) {
            if (products[i].id == _id) {
                return (products[i].name, products[i].owner);
            }
        }
        return ("Not Found", address(0));
    }
}
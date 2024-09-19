/**
 * Seminar 2.1 Blockchain primitive
 */

const SHA256 = require('ethereum-cryptography/sha256').sha256;
const utf8ToBytes = require('ethereum-cryptography/utils').utf8ToBytes;


class Block {
    constructor(data){
        this.data = data;      // Here we simplify data, let it be just a simple string
        this.previousHash = null;
    }

    toHash(){
        const hashBytes = utf8ToBytes(this.data + this.previousHash);
        return SHA256(hashBytes);        // a hash as byte array
    }
}


class Blockchain {
    constructor() {
        
        this.chain = [
             Block()
            ];
    }

    addBlock(block){
        // TODO 2 Compute block.previousHash = previousBlock.toHash()
        block.previousHash = previousBlock.toHash()
        this.chain.push(block)
    }

    isValid(){
        // TODO 3 Check every block previous hash
        return true;
    }
}

module.exports = { Block, Blockchain };

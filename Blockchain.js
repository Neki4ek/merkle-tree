const SHA256 = require('ethereum-cryptography/sha256').sha256;
const utf8ToBytes = require('ethereum-cryptography/utils').utf8ToBytes;


class Block {
    constructor(data){
        this.data = data;
        this.previousHash = null;
    }

    toHash(){
        const hashBytes = utf8ToBytes(this.data + this.previousHash);
        return SHA256(hashBytes);
    }
}


class Blockchain {
    constructor() {
        
        this.chain = [
             new Block("Genesis Block")
            ];
    }

    addBlock(block){
        block.previousHash = this.chain.at(-1).toHash()
        this.chain.push(block)
    }

    isValid() {
        return this.chain.every((item, index) => {
                if (index == 0) 
                    return true
                const prevItem = this.chain[index-1];
                return item.previousHash.toString() === prevItem.toHash().toString();
               });
    }
}

module.exports = { Block, Blockchain };

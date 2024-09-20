class TrieNode {
    constructor(key) {
        this.key = key;
        this.children = {};
        this.isWord = false;
    }
}


class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    insert(word) {
        let node = this.root;
        for (let element of word){
            node.children[element] ??= new TrieNode(element);

            node = node.children[element];

            node.isWord = element === word[word.length - 1];
        };

    }

    hasNode(word){
        // TODO Check is word in Trie
        return false;
    }

    getAllNodes(){
        // TODO returns all nodes as array
        return [];
    }
}

module.exports = { Trie };

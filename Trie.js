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
        let node = this.root;
        for (let char of word) {
            if (!(char in node.children)) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }

    getAllNodes(){
        // TODO returns all nodes as array
        const result = [];

        function traverse(node) {
            result.push({ node });
            
            for (const char in node.children) {
                traverse(node.children[char]);
            }
        }

        traverse(this.root);
        return result;
    }
}

module.exports = { Trie };

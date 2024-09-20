class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class Tree {
    constructor() {
        this.root = null;
    }

    addChild(child, parent){
         child.data < parent.data ? (parent.left ? this.addChild(child, parent.left) : parent.left = child) : 
                                     (parent.right ? this.addChild(child, parent.right) : parent.right = child);
    }

    addNode(node){
        if (this.root){
            this.addChild(node, this.root)
        } else this.root = node;
    }

    hasChild(childData, parent){
        if (childData == parent.data) return true;
        return childData < parent.data ? (parent.left ? this.hasChild(childData, parent.left) : false) :
                            (parent.right ? this.hasChild(childData, parent.right) : false);
    }

    hasNode(data){
        return this.root ? this.hasChild(data, this.root) : false
    }
}



module.exports = { Node, Tree }

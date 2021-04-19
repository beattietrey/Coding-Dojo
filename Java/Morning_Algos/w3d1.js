// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // == Main Methods ==

    // push to head
    addHead(node) {
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else if(this.head === this.tail) {
            this.tail.prev = node;
            node.next= this.tail;
            this.head = node;
        } 
        else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
    }

    // pop from tail
    removeTail() {
        if(this.isEmpty()) {
            return null;
        } else if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
    }

    display() {
        var runner = this.head;
        while(runner!=null) {
            console.log(runner.data);
            runner = runner.next;
        }
    }

    displayBack() {
        var runner = this.tail;
        while(runner!=null) {
            console.log(runner.data);
            runner = runner.prev;
        }
    }

    // return is empty
    isEmpty() {
        return this.head === null;
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) {
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else if(this.head === this.tail) {
            this.head.next=node;
            node.prev= this.head;
            this.tail = node;
        } 
        else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
    }

    // pop from head
    removeHead() {
        if(this.isEmpty()) {
            return null;
        } else if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
    }
}




var node1 = new DLLNode(1);
var node2 = new DLLNode(2);
var node3 = new DLLNode(3);
var node4 = new DLLNode(4);
var node5 = new DLLNode(5);
var node6 = new DLLNode(6);
var node7 = new DLLNode(7);


var dll = new DLList();

dll.addHead(node1);
dll.addHead(node2);
dll.addHead(node3);
dll.addHead(node4);
dll.removeTail();
dll.addTail(node5);
dll.removeHead();

// dll.display();
dll.displayBack();


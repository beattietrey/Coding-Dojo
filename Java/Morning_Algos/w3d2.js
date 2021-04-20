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

    // add node before target
    // target is the value of a node in the list
    // consider the edge case where you may have to move the head
    // conisder the edge case where you do not find the target
    prepend(target, node) {
        if(this.head.data === target) {
            this.addHead(node);
        } else {
            var runner = this.head;
            while(runner!=null) {
                if(runner.data === target) {
                    node.prev = runner.prev;
                    node.next = runner;
                    runner.prev.next = node;
                    runner.prev = node;
                }
                runner = runner.next;
            }
            return null;
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
    // push to head
    addHead(node) {
        if (!this.head) { // empty list
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;

            // this.tail.next = node;
            // node.prev = this.tail;
            // this.tail = node;
        }
    }

    // pop from tail
    removeTail() {
        if (this.head == null) return; // empty list
        if (this.head === this.tail) { // one node
            var temp = this.tail; // set a temp
            this.head = null; // disconnect the head
            this.tail = null; // disconnect the tail
            return temp;
        }
        var temp = this.tail; // set a temp
        this.tail = tail.prev; // move the tail back
        this.tail.next = null; // null out the new tail's next
        temp.prev = null; // null out the temp's prev
        return temp;
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
    removeHead() {}

    append(target, node){
        if(this.tail.data === target) {
            this.addTail(node);
        } else {
            var runner = this.head;
            while(runner!=null) {
                if(runner.data === target) {
                    node.prev = runner;
                    node.next = runner.next;
                    runner.next.prev = node;
                    runner.next = node;
                }
                runner = runner.next;
            }
            return null;
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
dll.append(1, new DLLNode(7));

dll.display();
console.log("________________")
// dll.displayBack();


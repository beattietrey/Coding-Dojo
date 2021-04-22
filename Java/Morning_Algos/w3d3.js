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

    // return true or false if a node exists with data === val
    exists(val) {
        if(this.head.data === val || this.tail.data === val) {
            return true
        }
        var runner = this.head;
        while(runner != null) {
            if(runner.data === val) {
                return true
            } else {
                runner = runner.next;
            }
        }
        return false
    }

    // remove and return the first node with data === val, if it exists
    // what if the list empty?
    // what if the target val is the head?
    // what if the target val is the tail?
    // what if the target val is the only node in the list?
    removeVal(val) {
        if(this.isEmpty()) {
            return null
        } else if (this.head.data===val) {
            return this.removeHead();
        } else if (this.tail.data===val) {
            return this.removeTail();
        } else{
            var runner = this.head;
            while(runner !=null) {
                if(runner.data === val) {
                    runner.prev.next = runner.next;
                    runner.next.prev = runner.prev;
                    runner.next=null;
                    runner.prev= null;
                    return runner;
                } else {
                    runner = runner.next;
                }
            }
            return null;
        }
    }

    // add before target
    prepend(target, node) {
        if (this.head !== null) { // Must have at least one node
            var curNode = this.head;
            if (curNode.data === target) { // Edge case: first node only
                node.next = curNode; // Connect nodes
                curNode.prev = node;
                this.head = node; // Move this.head to new node
            } else {
                while (curNode.next !== null) {
                    curNode = curNode.next; // Move to next node
                    if (curNode.data === target) {
                        // Link this new node to the others
                        node.next = curNode;
                        node.prev = curNode.prev;
                        // Link other nodes to this new node
                        curNode.prev.next = node;
                        curNode.prev = node;
                        return; // Exit while loop assuming only before first instance of target
                    }
                }
            }
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
        this.tail = temp.prev; // move the tail back
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
    removeHead() {
        if(this.isEmpty()) {
            return null;
        } else if (this.head === this.tail) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            return temp;
        } else {
            var temp = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            temp.next=null;
            temp.prev= null;
            return temp;
        }
    }

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



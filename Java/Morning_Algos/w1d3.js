class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    // console log (print) the data of every node in the current list
    read() {
        var runner = this.head;
        while(runner){
            console.log(runner.data);
            runner = runner.next;
        }
        // continue
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        var runner = this.head;
        while(runner){
            if(runner.data == value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        if (this.isEmpty()){
            return null
        } else {
            var returnedNode = this.head;
            this.head = this.head.next;
            return returnedNode.data;
        }
    }

    // return true or false if this.head is null
    isEmpty() {
        return this.head == null;
    }

    // add given node to the head, if it exists. return void
    addToFront(node) {
        node.next = this.head; // set the new node's next to the head
        this.head = node; // move the head to the new node
    }

    // when a pointer is to the LEFT of an equal sign, we are CHANGING it
    // when a pointer is to the RIGHT of an equal sign, we are READING it

    // create a new node with given data, add it to the head. return void
    addDataToFront(data) { // 10
        var newNode = new Node(data); // create a new node with the data
        newNode.next = this.head; // set the new node's next to the head
        this.head = node; // move the head to the new node
    }
}


var mySLL = new SLL();
mySLL.head = new Node(10);
mySLL.head.next = new Node(7);
mySLL.head.next.next = new Node(22);

mySLL.read();
// console.log(mySLL.contains(10));
// console.log(mySLL.removeFromFront());
// console.log(mySLL.contains(10));
// console.log(mySLL.head.data);
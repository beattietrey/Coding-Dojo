// === CLASSES ===

// Stack
// LAST IN, FIRST OUT
class slStack {
    constructor() {
        this.top = null; // this.head, this.end
        this.length = 0;
    }

    // add to top
    push(newNode) {
        if (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    // remove from top
    pop() {
        if (this.top === null) return null;

        const removed = this.top; // store previous top
        this.top = this.top.next; // move top pointer
        removed.next = null; // remove pointer from stored node
        this.length--; // decrement length

        return removed; // return the node
    }

    // aka check top
    peek() {
        return this.top;
    }

    // check if empty
    isEmpty() {
        return this.top === null;
    }

    // length getter
    getLength() {
        return this.length;
    }
}

// Queue
// FIRST IN, FIRST OUT
class Queue {
    constructor() {
        this.front = null; // sometimes called head "front of the line"
        this.back = null; // sometimes called rear or tail "back of the line"
        this.length = 0;
    }

    enqueue(node) {
        if (this.back === null) { // if back is null, list is empty
            this.back = node;
            this.front = node;
        } else { // otherwise add to back
            this.back.next = node;
            this.back = node;
        }
        this.length++;
    }

    // remove from the front
    dequeue() {
        if (this.front === null) {
            return null; // if empty return nothing
        };
        if (this.front === this.back) {
            this.back = null;
        };
        let node = this.front;
        this.front = node.next;
        node.next = null;
        this.length--;
        return node;
    }

    // check the front of the queue
    peek() {
        // return this.front ? this.front.data : this.front;
        return this.front;
    }

    // return if empty
    isEmpty() {
        return this.front === null;
    }

    // return length
    count() {
        return this.length;
    }
}

// Node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// === HELPER FUNCTIONS ===

// QUEUE - IS PALINDROME
// return true or false if the queue is a palindrome
// a palindrome is a string or number that is equal to itself when reversed

// racecar === racecar
// race !=== ecar

// you may not linearly iterate through your queue
// only use public queue methods (enqueue, dequeue, checkFront, isEmpty, length)
// return the queue back to it's original order

// you may use stacks queues arrays or dictionaries as additional storage
// you may create helper methods to break this challenge down into smaller parts
function isPalindrome(queue) {
    var qString= "";
    var revString="";
    var stack1 = new slStack();
    var stack2 = new slStack();


    while (!queue.isEmpty()) {
        var tempNode = queue.dequeue();
        qString+=tempNode.data;
        stack1.push(tempNode);
    }

    while (!stack1.isEmpty()) {
        var tempNode = stack1.pop();
        revString+=tempNode.data;
        stack2.push(tempNode);    
    }

    while (!stack2.isEmpty()) {
        var tempNode = stack2.pop();
        queue.enqueue(tempNode);    
    }
    
    if(qString === revString) {
        return true;
    } else {
        return false;
    }

    // for(let x=0;x<qstring.length/2;x++)
    //     if(qstring[x]!==qstring[qstring.length-1-x]) return false;
    // return true;
}

function isPalindrome2(queue) {
    var qstring="";

    var length = queue.count();
    var flag=true;
    let y=Math.floor(length/2)-1;

    while (length) {
        var node = queue.dequeue();
        if(qstring.length<=Math.ceil(length/2)){
            qstring+=node.data;
        }
        else{
            if(qstring[y--]!==node.data)
                flag=false;
        }
        queue.enqueue(node);
        length--;
    }
    return flag;
}

function readQueue(queue) {
    var tempQueue = new Queue();

    while (!queue.isEmpty()) {
        var tempNode = queue.dequeue();
        console.log(tempNode.data);
        tempQueue.enqueue(tempNode);
    }

    while (!tempQueue.isEmpty()) {
        queue.enqueue(tempQueue.dequeue());
    }

    return queue;
}

function readQueue2(queue) {
    var length = queue.count();

    while (length) {
        var node = queue.dequeue();
        console.log(node.data);
        queue.enqueue(node);
        length--;
    }
}

function countStack(stack) {
    let newStack = new slStack();

    let count = 0;

    while (!stack.isEmpty()) {
        let node = stack.pop();
        newStack.push(node);
        count++;
    }

    while (!newStack.isEmpty()) {
        stack.push(newStack.pop());
    }

    return count;
};

var q = new Queue;
var node1 = new Node("r");
var node2 = new Node("a");
var node3 = new Node("c");
var node4 = new Node("e");
var node5 = new Node("c");
var node6 = new Node("a");
var node7 = new Node("r");

q.enqueue(node1);
q.enqueue(node2);
q.enqueue(node3);
q.enqueue(node4);
q.enqueue(node5);
q.enqueue(node6);
q.enqueue(node7);


console.log(isPalindrome(q));
readQueue(q);
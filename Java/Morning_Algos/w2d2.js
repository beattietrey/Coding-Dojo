// Queue
// FIFO (First in, first out)

// - enqueue
// - dequeue
// - peek
// - isEmpty
// - count

class Queue {
    constructor() {
        this.front = null; // sometimes called head "front of the line"
        this.back = null; // sometimes called rear or tail "back of the line"
        this.length = 0;
    }

    // add to the back
    enqueue(node) {
        if(this.isEmpty()) {
            this.front = node;
            this.back = node;
        }
        else if (this.count() == 1){
            this.back = node;
            this.front.next = this.back;
        } else {
            this.back.next = node;
            this.back = node;
        }
        this.length++;
    }

    // remove from the front
    dequeue() {
        if(this.isEmpty()) {
            return null;
        } else if(this.count() == 1) {
            var popped = this.front;
            this.front = null;
            this.back = null;
            this.length--;
            return popped;
        } else {
            var popped = this.front;
            this.front = this.front.next;
            this.length--;
            return popped;
        }
    }

    // check the front of the queue
    peek() {
        return this.front ? this.front.data : this.front;
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

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// print every value in the queue
// you may only use one queue or stack for additional storage
// return the queue back to it's original order when you are done
// you are not allowed to linearly traverse the queue
// only use public methods enqueue, dequeue, peek, isempty, and length
function readQueue(queue) {
    if(queue.isEmpty()) {
        return null;
    } else if(queue.count() == 1) {
        console.log(queue.peek());
    } else {
        var newQ = new Queue;
        while(!queue.isEmpty()) {
            console.log(queue.peek());
            newQ.enqueue(queue.dequeue());
        }
        while(!newQ.isEmpty()) {
            queue.enqueue(newQ.dequeue());
        }
    }
}

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
    length() {
        return this.length;
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
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);
var node6 = new Node(6);
var node7 = new Node(7);

q.enqueue(node1);
q.enqueue(node2);
q.enqueue(node3);
q.enqueue(node4);
q.enqueue(node5);
q.enqueue(node6);
q.enqueue(node7);



readQueue(q);

console.log(q.peek());

// Stacks

// A stack is a LIFO data structure
// LAST IN, FIRST OUT
// LIFO

// push - add to top
// pop - remove from top
// peek - check the top
// isEmpty - check if the stack is empty, true/false
// length - return size of stack

// an arrStack is a simple stack implementation using
// a javascript array as the certain data structure.
class arrStack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        if (this.items.length === 0) {
            return true;
        }
        return false;
    }

    length() {
        return this.items.length;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// slStack must be implemented using Nodes and pointers
class slStack {
    constructor() {
        this.top = null; // this.head, this.end
        this.length = 0;
    }

    // add to top
    push(newNode) {
    if(this.top === null) {
        this.top = newNode;
    } else{
        newNode.next = this.top;
        this.top = newNode;
    }
        this.length++;
    }

    // remove from top
    pop() {
        var topNode = this.top;
        this.top = topNode.next;
        topNode.next = null;
        return topNode;
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

// buh buh bonus challenge: countStack

// write the standalone function countStack
// given a slStack, count the nodes
// return the count
// you may use one stack or array as additional storage
// the given stack must be returned back to it's original order
// you may only use public stack methods push pop peek isempty
function countStack(stack) {
    var tempStack = new slStack;
    var count = 0;
    while(stack.top != null) {
        tempStack.push(stack.pop());
        count++
    }
    while(!(tempStack.isEmpty())) {
        stack.push(tempStack.pop());
    }
    return count;
};

function sumStack(stack) {
    var tempStack = new slStack;
    var sum = 0;
    while(stack.top != null) {
        sum+=stack.top.data;
        tempStack.push(stack.pop());
    }
    while(!(tempStack.isEmpty())) {

        stack.push(tempStack.pop());
    }
    return sum;
}

var s = new slStack;
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);
var node6 = new Node(6);
var node7 = new Node(7);


s.push(node1);
s.push(node2);
s.push(node3);
s.push(node4);
s.push(node5);
s.push(node6);
s.push(node7);

console.log(countStack(s));
console.log(sumStack(s));


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // if the linked list has a second to last value, print it
    // return nothing
    // input: head -> (1) -> (5) -> (11) -> (7) -> (9) ->
    // print: 7
    printSecondToLastValue() {
        var runner = this.head;
        while(runner.next){
            if (!(runner.next.next)) {
                console.log(runner.data);
            }
            runner = runner.next;
        }
    }

    // bonus: print nth to last
    // if the linke list has a nth to last value, print it
    // return nothing
    // input: head -> (1) -> (5) -> (11) -> (7) -> (9) -> (4) -> (19) -> (30) ->
    //        n = 4
    // print: 9
    printNthToLast(n) {
        var runnerLength = this.head;
        var runnerNth = this.head;
        var count = 0;
        while(runnerLength.next) {
            count++;
            runnerLength = runnerLength.next;
        }
        if(count>0) {
            for(var i = 0; i <= count - n; i++){
                runnerNth = runnerNth.next;
            }
            console.log(runnerNth.data);
        }
    }

    // reverse linked list in place
    // you may not swap values between nodes
    // input:  head -> (1) -> (2) -> (3) ->
    // output: head -> (3) -> (2) -> (1) ->
    reverse() {
        if (this.head == null || this.head.next == null) return;
		let runner1 = this.head.next;
		let runner2 = this.head;
		let runner3 = null;
		while (runner1 != null) {
			runner2.next = runner3;
			runner3 = runner2;
			runner2 = runner1;
			runner1 = runner1.next;
		}
		runner2.next = runner3;
		this.head = runner2;
    }

    // if data is contained within the current list, delete it.
    delete(data) {
        // create a runner
        let runner = this.head;
        // check if head is empty
        if (!runner) {
            return;
        }
        // check if head is target
        if (runner.data == data) {
            this.removeFromFront();
            return;
        }

        // while next exists
        while (runner.next) {
            // check if runner next is data
            if (runner.next.data == data) {
                // remove it and return
                runner.next = runner.next.next;
                this.length--;
                return;
            }
            // otherwise traverse
            runner = runner.next;
        }
    }

    delete2(val) {
        var runner = this.head;
        var prev = null;

        if (runner !== null && runner.data == val) {
            this.head = runner.next;
            this.length--;
            return;
        }

        while (runner && runner.data !== val) {
            prev = runner;
            runner = runner.next;
        }

        if (runner === null) {
            return;
        }
        //runner is now our node to be deleted
        prev.next = runner.next;
        this.length--;
    }

    size() { // 0(1)
        return this.length;
    }

    // console log (print) the data of every node in the current list
    read() {
        var current = this.head; // set current as the head, if it exists or not
        while (current) { // if current, log and move to current.next
            console.log(current.data);
            current = current.next;
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        // start at the head
        var runner = this.head;
        // while we have a runner
        while (runner) {
            // return true if data === value
            if (runner.data === value) {
                return true;
            }
            // otherwise advance the runner
            runner = runner.next;
        }
        // if the while loop completes, return false
        return false;
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        if (this.isEmpty()) return null; // nothing to remove

        var removed = this.head; // save the head in a temp variable
        this.head = this.head.next; // move the head
        removed.next = null; // make removed no longer reference the list
        this.length--;
        return removed;
    }

    // return true or false if this.head is null
    isEmpty() {
        return this.head == null;
    }

    // add given node to the head, if it exists. return void
    addToFront(node) {
        node.next = this.head; // set the new node's next to the head
        this.head = node; // move the head to the new node
        this.length++;
    }

    // create a new node with given data, add it to the head. return void
    addDataToFront(data) { // 10
        var newNode = new Node(data); // create a new node with the data
        newNode.next = this.head; // set the new node's next to the head
        this.head = newNode; // move the head to the new node
        this.length++;
    }
}

let sll = new SLL();
sll.addToFront(new Node(30));
sll.addDataToFront(19);
sll.addDataToFront(41);
sll.addDataToFront(9);
sll.addDataToFront(7);
sll.addDataToFront(1);
sll.addDataToFront(5);
sll.addDataToFront(1);

// sll.printSecondToLastValue();
// sll.printNthToLast(4);

sll.read();
sll.reverse();
console.log("___________________")
sll.read();
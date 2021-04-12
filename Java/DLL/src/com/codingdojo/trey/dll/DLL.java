package com.codingdojo.trey.dll;

public class DLL {
    public Node head;
    public Node tail;
    
    public DLL() {
        this.head = null;
        this.tail = null;
    }
    
    // the push method will add a new node to the end of the list
    public void push(Node newNode) {
        // if there is no head in the list, aka, an empty list, we set the newNode to be the head and tail of the list
        if(this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        
        // first find the lastNode in the list
        // then, set the lastNode's next to be the newNode;
        // then, we have to set the previous of the lastNode to the lastNode that we found previously.
        // finally, set the list's tail to be the node that we have added
        Node lastNode = this.tail;
        lastNode.next = newNode;
        newNode.previous = lastNode;
        this.tail = newNode;
    }
    
    public void printValuesForward() {
        // find the first node, aka head.
        Node current = this.head;
        
        // while the current node exists...
        while(current != null) {
            // print it's value
            System.out.println(current.value);
            // and move on to it's next node.
            current = current.next;
        }
    } 
    
    public void printValuesBackward() {
    	Node current = this.tail;
    	while(current != null) {
    		System.out.println(current.value);
    		current = current.previous;
    	}
    }
    
    public Node pop() {
    	Node node = this.tail;
    	node.previous.next = null;
    	return node;
    }
    
    public boolean contains(Integer value) {
    	Node runner = this.head;
    	while(runner != null) {
    		if(runner.value == value) {
    			return true;
    		}
    		runner = runner.next;
    	}
    	return false;
    }
    
    public int size() {
    	int count = 0;
    	Node runner= this.head;
    	while(runner != null) {
    		count++;
    		runner = runner.next;
   		}
    	return count;
    }
    
    public void insertAt(Node newNode, int index) {
    	Node current = this.head;
    	int count = 0;
    	while(count != index) {
    		current = current.next;
    		count++;
    	}
    	current.previous.next = newNode;
    	newNode.next = current;
    	newNode.previous = current.previous;
    	current.previous = newNode;
    }
    
    public void removeAt(int index) {
    	Node current = this.head;
    	int count = 0;
    	while(count != index) {
    		current = current.next;
    		count++;
    	}
    	current.previous.next = current.next;
    	current.next.previous = current.previous;
    }
    
}

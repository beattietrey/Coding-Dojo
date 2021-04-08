public class SinglyLinkedList {
    public Node head;
    public SinglyLinkedList() {
        this.head = null;
    }
    // SLL methods go here. As a starter, we will show you how to add a node to the list.
    public void add(int value) {
        Node newNode = new Node(value);
        if(head == null) {
            head = newNode;
        } else {
            Node runner = head;
            while(runner.next != null) {
                runner = runner.next;
            }
            runner.next = newNode;
        }
    }
    
    public void remove() {
        Node runner = head;
        while(runner.next.next != null) {
            runner = runner.next;
        }
        runner.next = null;
    }

    public void printValues() {
        Node runner = head;
        while(runner != null) {
            System.out.println(runner.value);
            runner = runner.next;
        }
    }

    public Node find(int value) {
        Node runner = head;
        while(runner != null) {
            if(runner.value == value) {
                return runner;
            }
            runner = runner.next;
        }
        return null;
    }

    public void removeAt(int position) {
        Node runner = head;
        if(position == 0) {
            this.head = runner.next;
            runner.next = null;
        }
        else if(position > 0){
            for(int i = 0; i < position - 1; i++) {
                runner = runner.next;
            }
            runner.next = runner.next.next;
        }
        else {
            System.out.println("Must be a positive number");
        }
    }
}

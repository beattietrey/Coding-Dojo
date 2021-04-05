public class HelloWorld {
    public static void main(String[] args) {
        
        System.out.println("Hello World! This is my first Java app!");
        System.out.println("This is also my new java app!");

        int age = 10;
        String name = "Trey";
        char singleChar = 'b';
        boolean isFalse = true;
        // type identifier = value
        // call by identifier, THEN type

        int[] numbers = {1,2,3,4,5};
        boolean[] votes = {true, false};

        // Object[] CAN be used to hold multiple types, but isn't the norm

        OtherFile myVarName = new OtherFile();
        myVarName.sayStuff();
    }
}

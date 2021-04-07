public class GreeterTest {
    public static void main(String[] args){
        Greeter hW = new Greeter();
        String greeting = hW.greet();
        String greetingWithName = hW.greet("Eduardo");
        System.out.println(greetingWithName);
        // if (greeting.equals("Hello World") || greetingWithName.equals("Hello Eduardo")){
        //     System.out.println("Test successful");
        // } else{
        //     System.out.println("Test Fail");
        // }
    }
}

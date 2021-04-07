import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;
import java.util.Arrays;

public class PuzzleJava {
    public ArrayList<Integer> sumAndGreaterThan10(int[] arr) {
        int sum = 0;
        ArrayList<Integer> bigger = new ArrayList<Integer>();
        for(int i = 0;i < arr.length;i++) {
            sum += i;
            if(arr[i] > 10) {
                bigger.add(arr[i]);
            }
        }
        System.out.println(sum);
        System.out.println(bigger);
        return bigger;
    }

    public ArrayList<String> shuffleNames(ArrayList<String> names) {
        Collections.shuffle(names);
        ArrayList<String> longNames = new ArrayList<String>();
        for(int i = 0; i < names.size(); i++) {
            System.out.println(names.get(i));
            if(names.get(i).length() > 5) {
                longNames.add(names.get(i));
            }
        }
        System.out.println(longNames);
        return longNames;
    }

    public void shuffleLetters(ArrayList<String> letters) {
        Collections.shuffle(letters);
        ArrayList<String> vowels = new ArrayList<String>(Arrays.asList("a","e","i","o","u"));
        System.out.println(letters.get(letters.size() - 1));
        String first = letters.get(0);
        System.out.println(first);
        if(letters.get(0) == "y") {
            Random y = new Random();
            if(y.nextBoolean()) {
                System.out.println(first);
                System.out.println("Sometimes Y");
            }
        }
        else if(vowels.contains(first)){
            System.out.println(first);
            System.out.println("This is a vowel!");
        }
    }

    public ArrayList<Integer> randomNumbers() {
        Random r = new Random();
        int low = 55;
        int high = 101;
        ArrayList<Integer> randoms = new ArrayList<Integer>();
        for(int i = 0; i < 10; i++) {
            randoms.add(r.nextInt(high-low) + low);
        }
        return randoms;
    }

    public ArrayList<Integer> sortRandom() {
        ArrayList<Integer> sorted = this.randomNumbers();
        Collections.sort(sorted);
        System.out.println(sorted);
        return sorted;
    }

    public String randomString(ArrayList<String> letters) {
        String[] chars = new String[5];
        Random r = new Random();
        for(int i = 0; i < 5; i++) {
            chars[i] = letters.get(r.nextInt(26));
        }
        String output = "";
        for(int i = 0; i < 5; i++) {
            output = output.concat(chars[i]);
        }
        System.out.println(output);
        return output;
    }

    public String[] randomStringArray(int length) {
        String[] output = new String[length];
        for(int i = 0; i < length; i++) {
            output[i] = this.randomString(new ArrayList<String>(Arrays.asList("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")));
        }
        System.out.println(Arrays.toString(output));
        return output;
    }
}
import java.util.ArrayList;
import java.util.Arrays;

public class PuzzleTest{
    public static void main(String[] args){
        PuzzleJava puzzles = new PuzzleJava();
        int[] x = {3,5,1,2,7,9,8,13,25,32};
        ArrayList<String> names = new ArrayList<String>(Arrays.asList("Nancy", "Jinichi", "Fujibayashi", "Momochi", "Ishikawa"));
        ArrayList<String> letters = new ArrayList<String>(Arrays.asList("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"));
        // puzzles.sumAndGreaterThan10(x);
        // puzzles.shuffleNames(names);
        // puzzles.shuffleLetters(letters);
        // puzzles.randomNumbers();
        // puzzles.sortRandom();
        puzzles.randomString(letters);
        puzzles.randomStringArray(10);
    
    
    }
}
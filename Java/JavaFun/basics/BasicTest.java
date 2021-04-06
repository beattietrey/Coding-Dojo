import java.util.ArrayList;
import java.util.Arrays;

public class BasicTest{
    public static void main(String[] args){
        Basic tests = new Basic();
        // tests.print1To255();
        // tests.odds1To255();
        // tests.sums1To255();
        int[] x = {1,3,5,7,9,13};
        // tests.iterateArray(x);
        // tests.findMaxOfArray(x);
        // tests.averageOfArray(x);
        ArrayList<Integer> y = tests.oddsArray();
        ArrayList<Integer> yy = new ArrayList<Integer>( Arrays.asList(1,5,10,7,-2));
        // System.out.println(y);
        // tests.greaterThan(x,7);
        // tests.squared(y);
        // tests.positives(y);

        // tests.maxMinAverage(x);
        System.out.println(yy);
        tests.shift(yy);
        System.out.println(yy);

    }
}
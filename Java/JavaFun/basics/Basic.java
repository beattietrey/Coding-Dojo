import java.util.ArrayList;
import java.util.Arrays;

public class Basic {
    // 1
    public void print1To255() {
        for(int i = 1; i <= 255; i++) {
            System.out.println(i);
        }
    }

    // 2
    public void odds1To255() {
        for(int i = 1; i <= 255; i+=2) {
            System.out.println(i);
        }
    }

    // 3
    public void sums1To255() {
        int sum = 0;
        for(int i = 0;i <= 255;i++) {
            System.out.println("Number is: " + i);
            sum += i;
            System.out.println("Sum is: " + sum);
        }
    }

    // 4
    public void iterateArray(int[] arr) {
        for(int i:arr) {
            System.out.println(i);
        }
    }
    
    // 5
    public void findMaxOfArray(int[] arr) {
        int max = arr[0];
        for (int i = 1;i < arr.length; i++) {
            if(arr[i] > max) {
                max = arr[i];
            }
        }
        System.out.println(max);
    }

    // 6
    public void averageOfArray(int[] arr) {
        int sum = arr[0];
        for (int i = 1;i < arr.length; i++) {
            sum+=arr[i];
        }
        System.out.println(sum/arr.length);
    }

    // 7
    public ArrayList<Integer> oddsArray() {
        ArrayList<Integer> listname = new ArrayList<Integer>();       
        for(int i = 1; i <= 255; i+=2) {
            listname.add(i);
        }
        return listname;
    }

    // 8
    public int greaterThan(int[] arr, int y) {
        int count = 0;
        for (int i = 1;i < arr.length; i++) {
            if (arr[i] > y) {
                count++;
            }
        }
        System.out.println(count);
        return count;
    }

    // 9 
    public ArrayList<Integer> squared(ArrayList<Integer> arr) {
        for(int i = 1; i < arr.size(); i++) {
            int x = arr.get(i)*arr.get(i);
            arr.set(i,x);
        }
        return arr;
    }

    // 10
    public ArrayList<Integer> positives(ArrayList<Integer> arr) {
        for(int i = 1; i < arr.size(); i++) {
            if(arr.get(i) < 0) {
                int x = arr.get(i) * -1;
                arr.set(i,x);
            }
        }
        return arr;
    }

    // 11
    public int[] maxMinAverage(int[] arr) {
        int max = arr[0];
        int min = arr[0];
        int sum = arr[0];
        for (int i = 1;i < arr.length; i++) {
            if(arr[i] > max) {
                max = arr[i];
            }
            else if(arr[i] < min) {
                min = arr[i];
            }
            sum+=arr[i];
        }
        int avg = sum/arr.length;
        int[] mma= {max, min, avg};
        System.out.println(Arrays.toString(mma));
        return mma;
    }

    // 12
    public ArrayList<Integer> shift(ArrayList<Integer> arr) {
        for(int i = 1; i < arr.size(); i++) {
            int j = i - 1;
            arr.set(j,arr.get(i));
        }
        int size = arr.size() - 1;
        arr.set(size,0);
        return arr;
        }
    }


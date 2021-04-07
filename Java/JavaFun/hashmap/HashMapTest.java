import java.util.HashMap;
import java.util.Set;

public class HashMapTest{
    public static void main(String[] args) {
        HashMap mapping = new HashMap();
        HashMap<String,String> trackList = new HashMap<String,String>();
        trackList.put("title1","song1");
        trackList.put("title2","song2");
        trackList.put("title3","song3");
        trackList.put("title4","song4");

        String song3name = trackList.get("title3");

        Set<String> keys = trackList.keySet();
        for(String key:keys) {
            System.out.println(key);
            System.out.println(trackList.get(key));
        }
    }
}

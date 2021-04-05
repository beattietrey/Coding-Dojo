public class StringManipulator {
    String trimAndConcat(String string1,String string2) {
        String str = string1.trim().concat(string2.trim());
        return str;
    }
    Integer getIndexOrNull(String str, char x) {
        Integer index = str.indexOf(x);
        if( index == -1) {
            return null;
        }
        else{
            return index; 
        }
    }
    Integer getIndexOrNull(String str1, String str2) {
        Integer index = str1.indexOf(str2);
        if( index == -1) {
            return null;
        }
        else{
            return index; 
        }
    
    }
    String concatSubstring(String str1, int x, int y, String str2) {
        String sub = str1.substring(x,y);
        String output = sub.concat(str2);
        return output;
    }
}
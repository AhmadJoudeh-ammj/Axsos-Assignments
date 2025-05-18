import java.util.ArrayList;

public class GenericsAndExceptions {
    public static void main(String[] args) {
        // Step 1: Create an ArrayList of Object type
        ArrayList<Object> myList = new ArrayList<Object>();
        myList.add("13");
        myList.add("hello world");
        myList.add(48);                 // valid Integer
        myList.add("Goodbye World");

        // Step 2: Iterate and try to cast each to Integer
        for (int i = 0; i < myList.size(); i++) {
            try {
                // This will throw ClassCastException if object is not an Integer
                Integer castedValue = (Integer) myList.get(i);
                System.out.println("Successfully casted value at index " + i + ": " + castedValue);
            } catch (ClassCastException e) {
                // Step 3: Handle the exception and print details
                System.out.println("ClassCastException caught!");
                System.out.println("Index: " + i);
                System.out.println("Value: " + myList.get(i));
                System.out.println("Error: " + e.getMessage());
                System.out.println("-----------------------------");
            }
        }
    }
}
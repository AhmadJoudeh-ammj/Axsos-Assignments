import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Random;
    
public class TestPuzzleJava {
    public static void main(String[] args) {
        PuzzleJava puzzle = new PuzzleJava();

        // Test getTenRolls
        System.out.println("Ten Rolls:");
        int[] rolls = puzzle.getTenRolls();
        for (int num : rolls) {
            System.out.print(num + " ");
        }
        System.out.println("\n");

        // Test getRandomLetter
        System.out.println("Random Letter: " + puzzle.getRandomLetter());

        // Test generatePassword
        System.out.println("Random Password: " + puzzle.generatePassword());

        // Test getNewPasswordSet
        System.out.println("Password Set:");
        String[] passwords = puzzle.getNewPasswordSet(5);
        for (String pass : passwords) {
            System.out.println(pass);
        }

        // Test shuffleArray
        System.out.println("Shuffled Array:");
        int[] arrayToShuffle = {1, 2, 3, 4, 5, 6, 7, 8};
        puzzle.shuffleArray(arrayToShuffle);
        for (int num : arrayToShuffle) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}

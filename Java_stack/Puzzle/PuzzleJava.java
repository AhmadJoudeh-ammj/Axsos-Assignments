import java.util.Random;

   public class PuzzleJava {
    Random random = new Random();

    // 1. getTenRolls: Returns array of 10 random ints from 1–20
    public int[] getTenRolls() {
        int[] rolls = new int[10];
        for (int i = 0; i < 10; i++) {
            rolls[i] = random.nextInt(20) + 1;
        }
        return rolls;
    }

    // 2. getRandomLetter: Returns a single random letter from a-z
    public char getRandomLetter() {
        char[] alphabet = "abcdefghijklmnopqrstuvwxyz".toCharArray();
        int index = random.nextInt(26); // 0 to 25
        return alphabet[index];
    }

    // 3. generatePassword: Returns 8-character random password using getRandomLetter
    public String generatePassword() {
        StringBuilder password = new StringBuilder();
        for (int i = 0; i < 8; i++) {
            password.append(getRandomLetter());
        }
        return password.toString();
    }

    // 4. getNewPasswordSet: Returns an array of `length` random 8-character passwords
    public String[] getNewPasswordSet(int length) {
        String[] passwordSet = new String[length];
        for (int i = 0; i < length; i++) {
            passwordSet[i] = generatePassword();
        }
        return passwordSet;
    }

    // 5. shuffleArray: Shuffles the given array of integers in-place
    public void shuffleArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            int j = random.nextInt(arr.length);
            // Swap arr[i] and arr[j]
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
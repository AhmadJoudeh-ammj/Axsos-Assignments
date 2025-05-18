import java.util.Random;

public class NumbersGame {

    public static void main(String[] args) {
        System.out.println("Hello, human. I am thinking of a number between 0 and 10.");
        System.out.println("*********************************************************");
        System.out.println("Can you guess the number?");
        System.out.println("If you are not up to the task, you can always type 'q' to quit.");

        do {
            playGame();
        } while (wantsToPlayAgain());

        System.out.println("Thanks for playing! Shutting down...");
    }

    private static void playGame() {
        Random random = new Random();
        int answer = random.nextInt(11); // 0 to 10 inclusive
        int attempts = 0;
        final int maxAttempts = 3;

        while (attempts < maxAttempts) {
            System.out.print("Enter your guess (0-10) or 'q' to quit: ");
            String guess = System.console().readLine();

            if (guess == null) { // EOF or no input
                System.out.println("No input detected. Exiting...");
                System.exit(0);
            }

            if (guess.equalsIgnoreCase("q")) {
                System.out.println("I knew you didn't have it in you.");
                System.out.println("Shutting down...");
                System.exit(0);
            }

            int userGuess;
            try {
                userGuess = Integer.parseInt(guess);
            } catch (NumberFormatException e) {
                System.out.println("That's not a valid number! Try again.");
                continue;
            }

            if (userGuess < 0 || userGuess > 10) {
                System.out.println("Your guess must be between 0 and 10. Try again.");
                continue;
            }

            attempts++;

            if (userGuess == answer) {
                System.out.println("Lucky guess! You got it right!");
                return; // end game after correct guess
            } else {
                if (attempts < maxAttempts) {
                    System.out.println("Swing and a miss! Keep trying...");
                }
            }
        }

        // If we get here, user failed to guess in 3 attempts
        System.out.println("Three strikes and you're out! The number was " + answer + ".");
        System.out.println("Better luck next time, human.");
    }

    private static boolean wantsToPlayAgain() {
        System.out.print("Do you want to play again? (y/n): ");
        String response = System.console().readLine();
        if (response == null) {
            return false;
        }
        return response.equalsIgnoreCase("y");
    }
}
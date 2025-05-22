public class DeviceTest {
    public static void main(String[] args) {
        // Instantiate a new Phone
        Phone myPhone = new Phone();
        
        // Display initial status
        System.out.println("Initial phone status:");
        myPhone.displayStatus();
        System.out.println();
        
        // Make three phone calls
        System.out.println("Making three phone calls:");
        myPhone.makeCall();
        myPhone.makeCall();
        myPhone.makeCall();
        System.out.println();
        
        // Play a game twice
        System.out.println("Playing games:");
        myPhone.playGame();
        myPhone.playGame();
        System.out.println();
        
        // Charge the phone
        System.out.println("Charging phone:");
        myPhone.charge();
        System.out.println();
        
        // Final status
        System.out.println("Final phone status:");
        myPhone.displayStatus();
        
        // Demonstrate Ninja Bonus 2 (battery too low to play)
        System.out.println("\n--- Testing Low Battery Scenario ---");
        // Drain battery by making multiple calls
        System.out.println("Draining battery with multiple calls:");
        for (int i = 0; i < 15; i++) {
            myPhone.makeCall();
        }
        System.out.println("\nTrying to play a game with low battery:");
        myPhone.playGame(); // Should show warning that battery is too low
        
        // Charge and try again
        System.out.println("\nCharging phone and trying again:");
        myPhone.charge();
        myPhone.playGame();
    }
}
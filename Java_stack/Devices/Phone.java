public class Phone extends Device {
    
    // Constructor
    public Phone() {
        super(); // Call Device constructor to initialize battery to 100
    }
    
    // Method to make a call - decreases battery by 5
    public void makeCall() {
        if (this.battery >= 5) {
            this.battery -= 5;
            System.out.println("Making a call. Battery remaining: " + this.battery + "%");
            
            // Check if battery is critical after making call
            checkBatteryCritical();
        } else {
            System.out.println("Battery too low to make a call. Please charge your phone.");
        }
    }
    
    // Method to play a game - decreases battery by 20
    public void playGame() {
        // Ninja Bonus 2: Don't allow user to play a game if battery life is below 25
        if (this.battery >= 25) {
            this.battery -= 20;
            System.out.println("You play a game. Battery remaining: " + this.battery + "%");
            
            // Check if battery is critical after playing game
            checkBatteryCritical();
        } else {
            System.out.println("Battery too low to play a game. Battery should be at least 25% to play games.");
        }
    }
    
    // Method to charge the phone - increases battery by 50
    public void charge() {
        // Ensure battery doesn't exceed 100
        this.battery = Math.min(this.battery + 50, 100);
        System.out.println("Phone charging. Battery remaining: " + this.battery + "%");
    }
    
    // Ninja Bonus 1: Method to check if battery is critical
    private void checkBatteryCritical() {
        if (this.battery < 10) {
            System.out.println("WARNING: Battery critical! Please charge your phone soon.");
        }
    }
}
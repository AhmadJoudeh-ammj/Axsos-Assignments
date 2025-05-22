public class GorillaTest {
    public static void main(String[] args) {
        // Create a new Gorilla instance
        Gorilla kong = new Gorilla();
        
        // Display initial energy level
        System.out.println("--- Gorilla Test ---");
        System.out.println("Initial energy:");
        kong.displayEnergy();
        System.out.println();
        
        // Throw something three times
        System.out.println("Throwing things:");
        kong.throwSomething();
        kong.throwSomething();
        kong.throwSomething();
        System.out.println("Energy after throwing three things:");
        kong.displayEnergy();
        System.out.println();
        
        // Eat bananas twice
        System.out.println("Eating bananas:");
        kong.eatBananas();
        kong.eatBananas();
        System.out.println("Energy after eating two bananas:");
        kong.displayEnergy();
        System.out.println();
        
        // Climb once
        System.out.println("Climbing a tree:");
        kong.climb();
        System.out.println("Final energy after climbing:");
        kong.displayEnergy();
    }
}
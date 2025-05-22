public class Mammal {
    // Protected energy attribute so subclasses can access it
    protected int energyLevel;
    
    // Constructor - initializes energy level to 100
    public Mammal() {
        this.energyLevel = 100;
    }
    
    // Overloaded constructor to set custom energy level
    public Mammal(int energyLevel) {
        this.energyLevel = energyLevel;
    }
    
    // Method to display energy level
    public int displayEnergy() {
        System.out.println("Energy level: " + this.energyLevel);
        return this.energyLevel;
    }
}
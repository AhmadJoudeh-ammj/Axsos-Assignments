public class Bat extends Mammal {
    
    // Constructor - sets energy level to 300
    public Bat() {
        super(300); // Call the Mammal constructor with energy level 300
    }
    
    // fly method - reduces energy by 50
    public void fly() {
        this.energyLevel -= 50;
        System.out.println("*Whoosh* The bat takes flight! Energy decreased by 50.");
    }
    
    // eatHumans method - increases energy by 25
    public void eatHumans() {
        this.energyLevel += 25;
        System.out.println("So... well, never mind. Energy increased by 25.");
    }
    
    // attackTown method - reduces energy by 100
    public void attackTown() {
        this.energyLevel -= 100;
        System.out.println("*Crackling fire sounds* The bat is attacking a town! Energy decreased by 100.");
    }
}
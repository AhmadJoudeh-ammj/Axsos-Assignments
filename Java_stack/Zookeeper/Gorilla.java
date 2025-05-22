public class Gorilla extends Mammal {
    
    // Constructor - uses the default Mammal constructor (energy = 100)
    public Gorilla() {
        super();
    }
    
    // throwSomething method - reduces energy by 5
    public void throwSomething() {
        this.energyLevel -= 5;
        System.out.println("The gorilla has thrown something! Energy decreased by 5.");
    }
    
    // eatBananas method - increases energy by 10
    public void eatBananas() {
        this.energyLevel += 10;
        System.out.println("The gorilla ate a banana and is very satisfied! Energy increased by 10.");
    }
    
    // climb method - reduces energy by 10
    public void climb() {
        this.energyLevel -= 10;
        System.out.println("The gorilla has climbed a tree! Energy decreased by 10.");
    }
}
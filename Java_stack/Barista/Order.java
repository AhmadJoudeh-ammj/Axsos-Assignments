import java.util.ArrayList;
    
// Here we're creating a new data type called Order
public class Order {
    
    // MEMBER VARIABLES
    private String name; // default value of null
    private boolean ready; // default value false
    private ArrayList<Item> items; // defaults to null
    
    // CONSTRUCTOR
    // No arguments, sets name to "Guest", initializes items as an empty list.
    public Order() {
        this.name = "Guest";
        this.items = new ArrayList<>();
    }
    
    // OVERLOADED CONSTRUCTOR
    // Takes a name as an argument, sets name to this custom name.
    // Initializes items as an empty list.
    public Order(String name) {
        this.name = name;
        this.items = new ArrayList<>();
    }
    
    // ORDER METHODS
    
    // Method to add an item to the order
    public void addItem(Item item) {
        this.items.add(item);
    }
    
    // Method to get status message based on ready flag
    public String getStatusMessage() {
        if (this.ready) {
            return "Your order is ready.";
        } else {
            return "Thank you for waiting. Your order will be ready soon.";
        }
    }
    
    // Method to calculate total price of all items in the order
    public double getOrderTotal() {
        double total = 0.0;
        
        // Iterate through each item in the order
        for (Item item : items) {
            // Use the getter to access the price of each item
            total += item.getPrice();
        }
        
        return total;
    }
    
    // Method to display the order information
    public void display() {
        System.out.println("Customer Name: " + this.name);
        for (Item item : items) {
            System.out.println(item.getName() + " - $" + String.format("%.2f", item.getPrice()));
        }
        System.out.println("Total: $" + String.format("%.2f", this.getOrderTotal()));
    }
    
    // GETTERS & SETTERS
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public boolean isReady() {
        return ready;
    }
    
    public void setReady(boolean ready) {
        this.ready = ready;
    }
    
    public ArrayList<Item> getItems() {
        return items;
    }
    
    public void setItems(ArrayList<Item> items) {
        this.items = items;
    }
}
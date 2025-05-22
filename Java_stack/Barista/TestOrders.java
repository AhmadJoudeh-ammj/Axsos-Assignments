public class TestOrders {
    public static void main(String[] args) {
    
        // Create Item objects
        Item item1 = new Item("drip coffee", 1.50);
        Item item2 = new Item("cappuccino", 3.50);
        Item item3 = new Item("mocha", 4.50);
        Item item4 = new Item("latte", 3.75);
        Item item5 = new Item("muffin", 2.25);
    
        // Create 2 orders for unspecified guests
        Order order1 = new Order();
        Order order2 = new Order();
        
        // Create 3 orders using the overloaded constructor with specified names
        Order order3 = new Order("Cindhuri");
        Order order4 = new Order("Jimmy");
        Order order5 = new Order("Noah");
        
        // Add at least 2 items to each order using the addItem method
        order1.addItem(item1);
        order1.addItem(item2);
        
        order2.addItem(item2);
        order2.addItem(item3);
        
        order3.addItem(item1);
        order3.addItem(item4);
        order3.addItem(item5);
        
        order4.addItem(item3);
        order4.addItem(item5);
        
        order5.addItem(item1);
        order5.addItem(item3);
        
        // Test the getStatusMessage method by setting some orders as ready
        System.out.println("---- Testing Order Status Messages ----");
        System.out.println("Order 1 Status: " + order1.getStatusMessage());
        
        // Set order 2 as ready
        order2.setReady(true);
        System.out.println("Order 2 Status: " + order2.getStatusMessage());
        
        // Set order 4 as ready
        order4.setReady(true);
        System.out.println("Order 4 Status: " + order4.getStatusMessage());
        
        // Test getOrderTotal by printing the return value
        System.out.println("\n---- Testing Order Totals ----");
        System.out.println("Order 1 Total: $" + String.format("%.2f", order1.getOrderTotal()));
        System.out.println("Order 3 Total: $" + String.format("%.2f", order3.getOrderTotal()));
        System.out.println("Order 5 Total: $" + String.format("%.2f", order5.getOrderTotal()));
        
        // Test the display method on all orders
        System.out.println("\n---- Order 1 Display ----");
        order1.display();
        
        System.out.println("\n---- Order 2 Display ----");
        order2.display();
        
        System.out.println("\n---- Order 3 Display ----");
        order3.display();
        
        System.out.println("\n---- Order 4 Display ----");
        order4.display();
        
        System.out.println("\n---- Order 5 Display ----");
        order5.display();
    }
}
import java.util.ArrayList;

public class CoffeeKiosk {
    
    // MEMBER VARIABLES
    private ArrayList<Item> menu;
    private ArrayList<Order> orders;
    
    // CONSTRUCTOR
    public CoffeeKiosk() {
        this.menu = new ArrayList<>();
        this.orders = new ArrayList<>();
    }
    
    // METHODS
    
    // Method to add a menu item
    public void addMenuItem(String name, double price) {
        Item newItem = new Item(name, price);
        newItem.setIndex(menu.size());
        menu.add(newItem);
    }
    
    // Method to display the menu
    public void displayMenu() {
        System.out.println("\n===== MENU =====");
        for (Item item : menu) {
            System.out.printf("%d %s -- $%.2f\n", item.getIndex(), item.getName(), item.getPrice());
        }
        System.out.println("================");
    }
    
    // Method to create a new order
    public void newOrder() {
        // Shows the user a message prompt and then sets their input to a variable, name
        System.out.println("\nPlease enter customer name for new order:");
        String name = System.console().readLine();
    
        // Create a new order with the given input string
        // Provide default or placeholder values for the required constructor parameters
        // Example: new Order(customerName, orderType, orderId, totalAmount)
        Order newOrder = new Order(name, "defaultType", 0, 0.0);
        
        // Show the user the menu, so they can choose items to add
        displayMenu();
        
        // Prompts the user to enter an item number
        System.out.println("\nPlease enter a menu item index or q to quit:");
        String itemNumber = System.console().readLine();
        
        // Write a while loop to collect all user's order items
        while(!itemNumber.equals("q")) {
            try {
                // Convert the input string to integer
                int index = Integer.parseInt(itemNumber);
                
                // Check if the index is valid
                if (index >= 0 && index < menu.size()) {
                    // Get the item object from the menu, and add the item to the order
                    Item selectedItem = menu.get(index);
                    newOrder.addItem(selectedItem);
                    System.out.printf("Added %s to the order.\n", selectedItem.getName());
                } else {
                    System.out.println("Invalid menu item index. Please try again.");
                }
            } catch (NumberFormatException e) {
                System.out.println("Please enter a valid number or 'q' to quit.");
            }
            
            // Ask them to enter a new item index or q again, and take their input
            System.out.println("\nPlease enter a menu item index or q to quit:");
            itemNumber = System.console().readLine();
        }
        
        // After collecting their order, add it to orders list
        orders.add(newOrder);
        
        // Print the order details
        System.out.println("\n===== ORDER DETAILS =====");
        newOrder.display();
        System.out.println("=========================");
    }
    
    // NINJA BONUS: Method to add menu items through user input
    public void addMenuItemByInput() {
        System.out.println("\n===== ADD NEW MENU ITEM =====");
        System.out.println("Enter item name (or q to quit):");
        String name = System.console().readLine();
        
        if (name.equals("q")) {
            return;
        }
        
        System.out.println("Enter item price:");
        String priceStr = System.console().readLine();
        
        try {
            double price = Double.parseDouble(priceStr);
            addMenuItem(name, price);
            System.out.printf("\n%s added to the menu with price $%.2f\n", name, price);
        } catch (NumberFormatException e) {
            System.out.println("Invalid price format. Menu item not added.");
        }
    }
    
    // Method to display all orders
    public void displayOrders() {
        if (orders.isEmpty()) {
            System.out.println("\nNo orders to display.");
            return;
        }
        
        System.out.println("\n===== ALL ORDERS =====");
        for (int i = 0; i < orders.size(); i++) {
            System.out.printf("\nOrder #%d:\n", i + 1);
            orders.get(i).display();
            System.out.println("-----------------------");
        }
    }
    
    // Method to run the kiosk application
    public void runKiosk() {
        boolean running = true;
        
        // Add some initial menu items
        addMenuItem("coffee", 1.50);
        addMenuItem("latte", 4.50);
        addMenuItem("cappuccino", 3.00);
        addMenuItem("muffin", 4.00);
        addMenuItem("banana", 2.00);
        
        System.out.println("===== WELCOME TO CAFE JAVA =====");
        
        while (running) {
            System.out.println("\nMain Menu - Please select an option:");
            System.out.println("1. Display Menu");
            System.out.println("2. Create New Order");
            System.out.println("3. Add Menu Item");
            System.out.println("4. Display All Orders");
            System.out.println("q. Quit");
            
            String choice = System.console().readLine();
            
            switch (choice) {
                case "1" -> displayMenu();
                case "2" -> newOrder();
                case "3" -> addMenuItemByInput();
                case "4" -> displayOrders();
                case "q" -> {
                    System.out.println("\nThank you for using Cafe Java! Goodbye!");
                    running = false;
                }
                default -> System.out.println("\nInvalid option. Please try again.");
            }
        }
    }

    public ArrayList<Order> getOrders() {
        return orders;
    }

    public void setOrders(ArrayList<Order> orders) {
        this.orders = orders;
    }

    public ArrayList<Item> getMenu() {
        return menu;
    }

    public void setMenu(ArrayList<Item> menu) {
        this.menu = menu;
    }

    // Removed inner Orders class as it is not needed; use the public Order class instead.
}

public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = " , your order will be ready shortly";
        String readyMessage = " , your order is ready";
        String displayTotalMessage = " , Your total is $ " ;
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double dripCoffeePrice = 2.0;
        double cappuPrice = 4.0;
        double lattePrice = 3.5 ;
    
        // Customer name variables (add yours below)
        String customer1 = "Ahmad";
        String customer2 = "Sali";
        String customer3 = "Adam";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = true;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = true;
        boolean isReadyOrder4 = true;
        
            // APP INTERACTION SIMULATION (Add your code for the challenges below)
            // Example:
            System.out.println(generalGreeting +""+customer3+readyMessage); // Displays "Welcome to Cafe Java, Shatha"
            // ** Your customer interaction print statements will go here ** //
            

            if(isReadyOrder2) {
                System.out.println( customer1 + readyMessage + displayTotalMessage + cappuPrice);
            } else {
                System.out.println(generalGreeting + customer1 + pendingMessage);
            }
            if(isReadyOrder3==false){
                System.out.println(customer2+pendingMessage);
            } else {
                System.out.println(customer2 + displayTotalMessage + lattePrice*2);
            }

            System.out.println(customer3 + displayTotalMessage +(lattePrice-dripCoffeePrice));
            
        

    }
}
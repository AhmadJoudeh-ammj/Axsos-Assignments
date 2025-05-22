public class Device {
    // Battery attribute
    protected int battery;
    
    // Constructor - initializes battery to 100
    public Device() {
        this.battery = 100;
    }
    
    // Method to display battery status
    public void displayStatus() {
        System.out.println("Battery remaining: " + this.battery + "%");
    }
    
    // Getter and setter for battery
    public int getBattery() {
        return battery;
    }
    
    public void setBattery(int battery) {
        this.battery = battery;
    }
}
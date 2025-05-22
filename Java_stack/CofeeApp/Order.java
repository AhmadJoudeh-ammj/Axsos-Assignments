public class Order {
    private String customerName;
    private String item;
    private int quantity;
    private double price;

    public Order(String customerName, String item, int quantity, double price) {
        this.customerName = customerName;
        this.item = item;
        this.quantity = quantity;
        this.price = price;
    }

    public String getCustomerName() {
        return customerName;
    }

    public String getItem() {
        return item;
    }

    public int getQuantity() {
        return quantity;
    }

    public double getPrice() {
        return price;
    }

    public double getTotal() {
        return quantity * price;
    }

    @Override
    public String toString() {
        return "Order{" +
                "customerName='" + customerName + '\'' +
                ", item='" + item + '\'' +
                ", quantity=" + quantity +
                ", price=" + price +
                ", total=" + getTotal() +
                '}';
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public void setItem(String item) {
        this.item = item;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    void display() {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    void addItem(Item selectedItem) {
        throw new UnsupportedOperationException("Not supported yet.");
    }
}
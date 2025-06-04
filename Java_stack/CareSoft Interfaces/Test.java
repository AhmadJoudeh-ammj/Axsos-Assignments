import java.util.ArrayList;
import java.util.List;

// Dummy Physician class for demonstration
class Physician {
    private final int id;
    private int pin;

    public Physician(int id) {
        this.id = id;
    }

    public boolean assignPIN(int pin) {
        this.pin = pin;
        return (pin >= 1000 && pin <= 9999);
    }

    public int getPin() {
        return this.pin;
    }

    public boolean accessAuthorized(int confirmedAuthID) {
        return this.id == confirmedAuthID;
    }
}

// Dummy AdminUser class for demonstration

class AdminUser {
    private final int id;
    private int pin;
    private final List<String> securityIncidents = new ArrayList<>();

    public int getPin() {
        return this.pin;
    }

    public AdminUser(int id) {
        this.id = id;
    }

    public boolean assignPIN(int pin) {
        if (pin >= 100000 && pin <= 999999) {
            this.pin = pin;
            return true;
        } else {
            securityIncidents.add("Failed PIN assignment attempt.");
            return false;
        }
    }

    public boolean accessAuthorized(int confirmedAuthID) {
        boolean authorized = this.id == confirmedAuthID;
        if (!authorized) {
            securityIncidents.add("Unauthorized access attempt by ID: " + confirmedAuthID);
        }
        return authorized;
    }

    public List<String> reportSecurityIncidents() {
        return securityIncidents;
    }
}
public class Test {
    public static void main(String[] args) {
        Physician doc = new Physician(1);
        AdminUser admin = new AdminUser(42);
        System.out.println("Assigning Physician PIN 1234: " + doc.assignPIN(1234));
        System.out.println("Physician PIN is: " + doc.getPin());
        System.out.println("Assigning Admin PIN 123456: " + admin.assignPIN(123456));
        System.out.println("Admin PIN is: " + admin.getPin());
        System.out.println("Access authorized (42): " + admin.accessAuthorized(42));
        System.out.println("Access authorized (99): " + admin.accessAuthorized(99));
        System.out.println("Security incidents:");
        for (String incident : admin.reportSecurityIncidents()) {
            System.out.println(incident);
        }
        System.out.println("Security incidents:");
        for (String incident : admin.reportSecurityIncidents()) {
            System.out.println(incident);
        }
    }
}
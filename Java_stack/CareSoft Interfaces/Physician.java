interface HIPAACompliantUser {
    boolean assignPIN(int pin);
    boolean accessAuthorized(Integer confirmedAuthID);
}

public class Physician implements HIPAACompliantUser {
    private final int id;
    private int pin;

    public int getPin() {
        return this.pin;
    }

    public Physician(int id) {
        this.id = id;
    }

    @Override
    public boolean assignPIN(int pin) {
        if (pin >= 1000 && pin <= 9999) {
            this.pin = pin;
            return true;
        }
        return false;
    }

    @Override
    public boolean accessAuthorized(Integer confirmedAuthID) {
        return this.id == confirmedAuthID;
    }
}
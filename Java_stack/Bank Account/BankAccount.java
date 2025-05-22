public class BankAccount {
    // MEMBER VARIABLES
    private double checkingBalance;
    private double savingsBalance;
    private String accountNumber;

    private static int accounts;
    private static double totalMoney; // refers to the sum of all bank account checking and savings balances

    // CONSTRUCTOR
    public BankAccount() {
        this.checkingBalance = 0;
        this.savingsBalance = 0;
        this.accountNumber = generateAccountNumber();
        accounts++;
    }
    
    // PRIVATE METHOD FOR GENERATING ACCOUNT NUMBER
    private String generateAccountNumber() {
        String accountNum = "";
        for (int i = 0; i < 10; i++) {
            accountNum += (int) (Math.random() * 10);
        }
        return accountNum;
    }

    // GETTERS
    public double getCheckingBalance() {
        return this.checkingBalance;
    }
    
    public double getSavingsBalance() {
        return this.savingsBalance;
    }
    
    public String getAccountNumber() {
        return this.accountNumber;
    }
    
    public static int getAccounts() {
        return accounts;
    }
    
    public static double getTotalMoney() {
        return totalMoney;
    }

    // METHODS
    // deposit
    public void deposit(String accountType, double amount) {
        if (amount > 0) {
            if (accountType.equalsIgnoreCase("checking")) {
                this.checkingBalance += amount;
                totalMoney += amount;
                System.out.println("Successfully deposited $" + amount + " to checking. New checking balance: $" + this.checkingBalance);
            } else if (accountType.equalsIgnoreCase("savings")) {
                this.savingsBalance += amount;
                totalMoney += amount;
                System.out.println("Successfully deposited $" + amount + " to savings. New savings balance: $" + this.savingsBalance);
            } else {
                System.out.println("Invalid account type. Please specify 'checking' or 'savings'.");
            }
        } else {
            System.out.println("Deposit amount must be positive.");
        }
    }
    
    // withdraw
    public void withdraw(String accountType, double amount) {
        if (amount <= 0) {
            System.out.println("Withdrawal amount must be positive.");
            return;
        }
        
        if (accountType.equalsIgnoreCase("checking")) {
            if (this.checkingBalance >= amount) {
                this.checkingBalance -= amount;
                totalMoney -= amount;
                System.out.println("Successfully withdrew $" + amount + " from checking. New checking balance: $" + this.checkingBalance);
            } else {
                System.out.println("Insufficient funds in checking account.");
            }
        } else if (accountType.equalsIgnoreCase("savings")) {
            if (this.savingsBalance >= amount) {
                this.savingsBalance -= amount;
                totalMoney -= amount;
                System.out.println("Successfully withdrew $" + amount + " from savings. New savings balance: $" + this.savingsBalance);
            } else {
                System.out.println("Insufficient funds in savings account.");
            }
        } else {
            System.out.println("Invalid account type. Please specify 'checking' or 'savings'.");
        }
    }
    
    // getBalance
    public void getBalance() {
        System.out.println("Account #" + this.accountNumber);
        System.out.println("Checking Balance: $" + this.checkingBalance);
        System.out.println("Savings Balance: $" + this.savingsBalance);
        System.out.println("Total Balance: $" + (this.checkingBalance + this.savingsBalance));
    }
}
    
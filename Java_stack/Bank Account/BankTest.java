public class BankTest {
    public static void main(String[] args) {
        // Create 3 bank accounts
        BankAccount account1 = new BankAccount();
        BankAccount account2 = new BankAccount();
        BankAccount account3 = new BankAccount();
        
        System.out.println("Created 3 bank accounts:");
        System.out.println("Account 1: " + account1.getAccountNumber());
        System.out.println("Account 2: " + account2.getAccountNumber());
        System.out.println("Account 3: " + account3.getAccountNumber());
        System.out.println();
        
        // Deposit Test
        System.out.println("===== DEPOSIT TESTS =====");
        account1.deposit("checking", 1500.75);
        account1.deposit("savings", 3000.50);
        
        account2.deposit("checking", 2500.25);
        account2.deposit("savings", 1200.00);
        
        account3.deposit("checking", 750.35);
        account3.deposit("savings", 5000.15);
        
        // Test invalid deposits
        account1.deposit("savings", -100); // Negative amount
        account2.deposit("investment", 500); // Invalid account type
        System.out.println();
        
        // Display balances after deposits
        System.out.println("===== BALANCES AFTER DEPOSITS =====");
        account1.getBalance();
        System.out.println();
        account2.getBalance();
        System.out.println();
        account3.getBalance();
        System.out.println();
        
        // Withdrawal Test
        System.out.println("===== WITHDRAWAL TESTS =====");
        account1.withdraw("checking", 500.50);
        account1.withdraw("savings", 1000.25);
        
        account2.withdraw("checking", 1200.75);
        account2.withdraw("savings", 300.50);
        
        account3.withdraw("checking", 200.35);
        account3.withdraw("savings", 1500.00);
        
        // Test invalid withdrawals
        account1.withdraw("checking", 2000); // Insufficient funds
        account2.withdraw("savings", -200); // Negative amount
        account3.withdraw("investment", 100); // Invalid account type
        System.out.println();
        
        // Display balances after withdrawals
        System.out.println("===== BALANCES AFTER WITHDRAWALS =====");
        account1.getBalance();
        System.out.println();
        account2.getBalance();
        System.out.println();
        account3.getBalance();
        System.out.println();
        
        // Static Test
        System.out.println("===== STATIC TESTS =====");
        System.out.println("Total number of bank accounts: " + BankAccount.getAccounts());
        System.out.println("Total money in all accounts: $" + BankAccount.getTotalMoney());
    }
}

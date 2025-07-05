class BankAccount:
    def __init__(self, interest_rate=0.01, balance=0):
        self.interest_rate = interest_rate
        self.balance = balance 

    def deposit(self, amount):
        self.balance += amount
        print(f"Deposited ${amount}")
        return self

    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount
            print(f"Withdrew ${amount}")
        else:
            print("Insufficient Balance")
        return self

    def display_account_info(self):
        print(f"Balance: ${self.balance:.2f}")
        return self

    def yield_interest_rate(self):
        if self.balance > 0:
            interest = self.balance * self.interest_rate
            self.balance += interest
            print(f"Interest Added: ${interest:.2f}")
        else:
            print("No interest applied (balance is zero)")
        return self


account1 = BankAccount()
account2 = BankAccount()

account1.deposit(400).deposit(500).deposit(200).withdraw(600).yield_interest_rate(). display_account_info()
account2.deposit(800).deposit(15000).withdraw(200).withdraw(100).withdraw(50).withdraw(150).yield_interest_rate().display_account_info()     
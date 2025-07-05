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

    def yield_interest(self):
        if self.balance > 0:
            interest = self.balance * self.interest_rate
            self.balance += interest
            print(f"Interest Added: ${interest:.2f}")
        else:
            print("No interest applied (balance is zero)")
        return self


class User:
    def __init__(self, name):
        self.name = name
        self.accounts = {}  # Dictionary to store accounts by name

    def create_account(self, account_name, interest_rate=0.01, balance=0):
        self.accounts[account_name] = BankAccount(interest_rate, balance)
        print(f"{self.name} created account '{account_name}'")
        return self

    def make_deposit(self, account_name, amount):
        if account_name in self.accounts:
            self.accounts[account_name].deposit(amount)
        else:
            print(f"Account '{account_name}' not found for {self.name}")
        return self

    def make_withdrawal(self, account_name, amount):
        if account_name in self.accounts:
            self.accounts[account_name].withdraw(amount)
        else:
            print(f"Account '{account_name}' not found for {self.name}")
        return self

    def display_user_balance(self, account_name):
        if account_name in self.accounts:
            print(f"User: {self.name}, Account: {account_name} → ", end="")
            self.accounts[account_name].display_account_info()
        else:
            print(f"Account '{account_name}' not found for {self.name}")
        return self

    def transfer_money(self, from_account, other_user, to_account, amount):
        if from_account in self.accounts and to_account in other_user.accounts:
            if self.accounts[from_account].balance >= amount:
                self.accounts[from_account].withdraw(amount)
                other_user.accounts[to_account].deposit(amount)
                print(f"{self.name} transferred ${amount} from '{from_account}' to {other_user.name}'s '{to_account}'")
            else:
                print(f"{self.name} has insufficient funds in '{from_account}'")
        else:
            print("Invalid account names for transfer")
        return self
    
user1 = User("Ahmad")

user1.create_account("Savings Account" , interest_rate=0.7 , balance=0)
user1.create_account("Checkings", interest_rate=0.5 , balance=0)


user1.make_deposit("Savings Account",50).make_deposit("Checkings", 500).display_user_balance()
class User:
    def __init__(self, name):
        self.name = name
        self.balance = 0

    def make_deposit(self, amount):
        self.balance += amount
        print(f"Deposited ${amount} to {self.name}'s account")

    def make_withdrawal(self, amount):
        self.balance -= amount
        print(f"{self.name} withdrew ${amount}")

    def transfer_money(self, other_user, amount):
        if self.balance >= amount:
            self.balance -= amount
            other_user.balance += amount
            print(f"{self.name} transferred ${amount} to {other_user.name}")
        else:
            print(f"{self.name} does not have enough balance to transfer ${amount}")

    def display_user_balance(self):
        print(f"User: {self.name}, Balance: ${self.balance}")


# Create users
user1 = User("Ahmad")
user2 = User("Ali")
user3 = User("Jamal")

# Ahmad makes 3 deposits and 1 withdrawal
user1.make_deposit(1000)
user1.make_deposit(500)
user1.make_deposit(1200)
user1.make_withdrawal(300)

# Ali makes 2 deposits and 2 withdrawals
user2.make_deposit(1200)
user2.make_deposit(600)
user2.make_withdrawal(200)
user2.make_withdrawal(250)

user3.make_deposit(2700)
user3.make_withdrawal(800)

# Display balances
user1.display_user_balance()
user2.display_user_balance()
user3.display_user_balance()

# Display balances after transfer
user1.transfer_money(user3,400)
user1.display_user_balance()
user3.display_user_balance()
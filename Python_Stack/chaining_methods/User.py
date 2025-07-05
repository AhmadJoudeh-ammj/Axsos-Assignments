class User:
    def __init__(self, name):
        self.name = name
        self.balance = 0

    def make_deposit(self, amount):
        self.balance += amount
        print(f"{self.name} deposited ${amount}")
        return self

    def make_withdrawal(self, amount):
        self.balance -= amount
        print(f"{self.name} withdrew ${amount}")
        return self

    def transfer_money(self, other_user, amount):
        if self.balance >= amount:
            self.balance -= amount
            other_user.balance += amount
            print(f"{self.name} transferred ${amount} to {other_user.name}")
        else:
            print(f"{self.name} does not have enough balance to transfer ${amount}")
        return self

    def display_user_balance(self):
        print(f"User: {self.name}, Balance: ${self.balance}")
        return self


user1 = User("Ahmad")
user2 = User("Ali")
user3 = User("Jamal")
user4 = User("Mohammad")

user1.make_deposit(1800).make_deposit(650).make_deposit(200).make_withdrawal(1400).display_user_balance()
user2.make_deposit(1200).make_deposit(300).make_withdrawal(50).make_withdrawal(100).display_user_balance()
user3.make_deposit(22500).make_withdrawal(200).make_withdrawal(300).make_withdrawal(400).transfer_money(user1,500).display_user_balance()
user1.display_user_balance()
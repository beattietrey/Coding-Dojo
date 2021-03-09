class User:
    def __init__ (self, name):
        self.name = name
        self.account = BankAccount(.05,1000)

    def make_deposit(self, amount):
        self.account.deposit(amount)
        return self
    
    def make_withdrawal(self, amount):
        self.account.withdraw(amount)
        return self
    
    def display_user_balance(self):
        print(f'User: {self.name}, Balance: ${self.account.balance}')
        return self

    def transfer_money(self, other_user,amount):
        self.account.withdraw(amount)
        other_user.account.deposit(amount)
        print(f"{self.name} Balance: {self.account.display_account_infocopy()}, {other_user.name} Balance: {other_user.account.display_account_infocopy()}")

class BankAccount:
    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance
    def deposit(self, amount):
        print(f'Balance: {self.balance}') 
        self.balance+=amount
        print(f'New Balance: {self.balance}') 
        return self
    def withdraw(self, amount):
        print(f'Balance: {self.balance}') 
        self.balance-=amount
        print(f'New Balance: {self.balance}') 
        return self
    def display_account_infocopy(self):
        print(f'Balance: {self.balance} Interest Rate: {self.int_rate}')
        return self
    def yield_interest(self):
        print(f'Prior Balance: {self.balance} Interest Rate: {self.int_rate}')
        self.balance = self.balance + (self.int_rate * self.balance)
        return self

user1 = User("Guido van Rossum")
user2 = User("Jason Bateman")
user3 = User("Shelley Peterson")

user1.make_deposit(300)
user1.make_deposit(200)



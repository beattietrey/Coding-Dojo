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


account1 = BankAccount(.05, 1000)
account2 = BankAccount(.05, 1000)




account1.deposit(300).deposit(300).deposit(300).withdraw(400).yield_interest().display_account_infocopy()
print('_________________________')
account2.deposit(400).deposit(1300).withdraw(600).withdraw(900).withdraw(600).withdraw(100).yield_interest().display_account_infocopy()

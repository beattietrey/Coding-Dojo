class User:
    def __init__ (self, name,acct_name,int_rate=.05,balance=0):
        self.name = name
        self.account = {acct_name: BankAccount(int_rate,balance)}

    def make_bank_account(self, acct_name,int_rate=.05,balance=0):
        self.account[acct_name] = BankAccount(int_rate,balance)

    def make_deposit(self, amount, acct_name):
        self.account[acct_name].deposit(amount)
        return self
    
    def make_withdrawal(self, amount, acct_name):
        self.account[acct_name].withdraw(amount)
        return self
    
    def display_user_balance(self, acct_name):
        print(f"User: {self.name}, Balance: ${self.account[acct_name].balance}")
        return self

    def transfer_money(self, user_acct_name, other_user,other_user_acct_name,amount):
        self.account[user_acct_name].withdraw(amount)
        other_user.account[other_user_acct_name].deposit(amount)
        print(self.name)
        print(user_acct_name)
        self.account[user_acct_name].display_account_infocopy()
        print(other_user.name)
        print(other_user_acct_name)
        other_user.account[other_user_acct_name].display_account_infocopy()


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

user1 = User("Guido van Rossum",'Checking')
user2 = User("Jason Bateman", 'Checking')
user3 = User("Shelley Peterson", 'Checking')

user1.make_bank_account('Savings')
user1.make_bank_account('Checking-2')

# user1.make_deposit(300,'Checking')
# user1.make_deposit(300,'Savings')

user1.transfer_money('Checking', user2, 'Checking', 500)
# user1.account['Checking'].display_account_infocopy()
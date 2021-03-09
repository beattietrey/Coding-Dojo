class User:
    def __init__ (self, name, account_value):
        self.name = name
        self.account_value = account_value

    def make_deposit(self, amount):
        self.account_value+=amount
        return self
    
    def make_withdrawal(self, amount):
        self.account_value-=amount
        return self
    
    def display_user_balance(self):
        print(f'User: {self.name}, Balance: ${self.account_value}')
        return self

    def transfer_money(self, other_user,amount):
        self.account_value-=amount
        other_user.account_value+=amount
        print(f'{self.name} Balance: {self.account_value}, {other_user.name} Balance: {other_user.account_value}')
    


user1 = User("Guido van Rossum", 150)
user2 = User("Jason Bateman", 1000)
user3 = User("Shelley Peterson", 3000)

user1.make_deposit(300).make_deposit(300).make_deposit(300).make_withdrawal(500).display_user_balance()

user2.make_deposit(400).make_deposit(20).make_withdrawal(300).make_withdrawal(300).display_user_balance()

user3.make_deposit(8000).make_withdrawal(3000).make_withdrawal(1000).make_withdrawal(14000).display_user_balance()

user1.transfer_money(user3, 400)

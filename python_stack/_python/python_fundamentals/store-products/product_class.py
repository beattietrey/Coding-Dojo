class Product:
    def __init__(self,name, price,category):
        self.name=name
        self.price=price
        self.category=category

    def update_price(self,percent_change,is_increased):
        if is_increased == True:
            self.price = self.price + (self.price*(percent_change*.01))
            self.price = round(self.price,2)
            return self
        else:
            self.price = self.price - (self.price*(percent_change*.01))
            self.price = round(self.price,2)
            return self
    
    def print_info(self):
        print(self.name,self.category,self.price)
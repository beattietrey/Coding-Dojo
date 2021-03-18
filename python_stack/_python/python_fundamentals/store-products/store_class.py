class Store:
    def __init__(self,name,product_list=[]):
        self.name = name
        self.products = product_list

    def add_products(self, new_product):
        self.products.append(new_product)
        return self

    def sell_product(self, id):
        self.products[id].print_info()
        self.products.pop(id)
        return self
        
    def print_inventory(self):
        for item in self.products:
            item.print_info()

    def inflation(self, percent_increase):
        for i in range(0,len(self.products)):
            self.products[i].update_price(percent_increase,True)
            
    def set_clearance(self,category,percent_decrease):
        for i in range(0,len(self.products)):
            if self.products[i].category == category:
                self.products[i].update_price(percent_decrease,False)
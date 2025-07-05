class MathDojo:
    def __init__(self):
        self.result = 0

    def add(self, num, *nums):
        self.result += num
        for n in nums:
            self.result += n
        return self  

    def subtract(self, num, *nums):
        self.result -= num
        for n in nums:
            self.result -= n
        return self 
    
md = MathDojo()

md.add(1)                  
print(md.result)           

md.add(2, 3)               
print(md.result)           

md.add(4, 5, 6)      
print(md.result)    



md.subtract(1)
print(md.result) 

md.subtract(2, 4)
print(md.result) 

md.subtract(1, 5)
print(md.result) 


x = md.add(4).add(4 , 5 , 4).subtract(7, 2).result
print(x)

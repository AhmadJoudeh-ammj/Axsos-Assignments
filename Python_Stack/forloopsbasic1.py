#1. Basic - Print all integers from 0 to 150
for x in range(0, 151):
  print(x) 


#2. multiples of five 
for i in range(5, 1001, 5):
    print(i)
    
    
#3. Counting, the Dojo Way 
for i in range(1, 101):
    if i % 10 == 0:
        print("Coding Dojo")
    elif i % 5 == 0:
        print("Coding")
    else:
        print(i)
        
#4. Whoa. That Sucker's Huge
total_sum = sum(range(1, 500001, 2))
print(total_sum)

#5. Countdown by Fours
for num in range(2018, 0, -4):
    print(num)
    

#6. Flexible Counter
lowNum = 2
highNum = 9
mult = 3

for num in range(lowNum, highNum + 1):
    if num % mult == 0:
        print(num)

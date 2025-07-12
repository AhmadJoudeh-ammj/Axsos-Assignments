x = [ [5,2,3], [10,8,9] ]
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

# 1. Update Values in Dictionaries and Lists
# Change the value 10 in x to 15.
x[1][0] = 15

# Change the last_name of the first student from 'Jordan' to 'Bryant'
students[0]['last_name'] = 'Bryant'

# In the sports_directory, change 'Messi' to 'Andres'
sports_directory['soccer'][0] = 'Andres'

# Change the value 20 in z to 30
z[0]['y'] = 30

print("--- Updated Data Structures ---")
print(f"x: {x}")
print(f"students: {students}")
print(f"sports_directory: {sports_directory}")
print(f"z: {z}")

# 2. Iterate Through a List of Dictionaries
def iterateDictionary(some_list):
    for dictionary in some_list:
        for key, value in dictionary.items():
            print(f"{key} - {value}")

students_full = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

print("\n--- iterateDictionary Output ---")
iterateDictionary(students_full)

# 3. Get Values From a List of Dictionaries
def iterateDictionary2(key_name, some_list):
    for dictionary in some_list:
        if key_name in dictionary:
            print(dictionary[key_name])

print("\n--- iterateDictionary2 (first_name) Output ---")
iterateDictionary2('first_name', students_full)

print("\n--- iterateDictionary2 (last_name) Output ---")
iterateDictionary2('last_name', students_full)

# 4. Iterate Through a Dictionary with List Values
def printInfo(some_dict):
    for key, value_list in some_dict.items():
        print(f"\n{len(value_list)} {key.upper()}")
        for item in value_list:
            print(item)

dojo = {
'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

print("\n--- printInfo Output ---")
printInfo(dojo)
class Animal:
    def __init__(self, name, age=0, health=50, happiness=50):
        self.name = name
        self.age = age
        self.health = health
        self.happiness = happiness

    def display_info(self):
        print(f"Name: {self.name}, Health: {self.health}, Happiness: {self.happiness}")

    def feed(self):
        self.health += 10
        self.happiness += 10
        print(f"{self.name} has been fed. Health: {self.health}, Happiness: {self.happiness}")

class Lion(Animal):
    def __init__(self, name, age=0, health=60, happiness=40, roar_strength=7):
        super().__init__(name, age, health, happiness)
        self.roar_strength = roar_strength

    def display_info(self):
        super().display_info()
        print(f"  Roar Strength: {self.roar_strength}")

    def feed(self):
        self.health += 15  # Lions get more health from feeding
        self.happiness += 5   # But less happiness
        print(f"{self.name} (Lion) has been fed. Health: {self.health}, Happiness: {self.happiness}")

class Monkey(Animal):
    def __init__(self, name, age=0, health=45, happiness=60, agility=8):
        super().__init__(name, age, health, happiness)
        self.agility = agility

    def display_info(self):
        super().display_info()
        print(f"  Agility: {self.agility}")

    def feed(self):
        self.health += 5    # Monkeys get less health from feeding
        self.happiness += 15  # But more happiness
        print(f"{self.name} (Monkey) has been fed. Health: {self.health}, Happiness: {self.happiness}")

class Bear(Animal):
    def __init__(self, name, age=0, health=70, happiness=30, hibernation_readiness=6):
        super().__init__(name, age, health, happiness)
        self.hibernation_readiness = hibernation_readiness

    def display_info(self):
        super().display_info()
        print(f"  Hibernation Readiness: {self.hibernation_readiness}")

    def feed(self):
        self.health += 10
        self.happiness += 10
        print(f"{self.name} (Bear) has been fed. Health: {self.health}, Happiness: {self.happiness}")




class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name

    def add_animal(self, animal_type, name):
        if animal_type == "lion":
            self.animals.append(Lion(name))
        elif animal_type == "monkey":
            self.animals.append(Monkey(name))
        elif animal_type == "bear":
            self.animals.append(Bear(name))
        else:
            print(f"Unknown animal type: {animal_type}")

    def print_all_info(self):
        print("-"*30, self.name, "-"*30)
        for animal in self.animals:
            animal.display_info()

    def feed_all_animals(self):
        print(f"\n--- Feeding all animals in {self.name} ---")
        for animal in self.animals:
            animal.feed()




# Example Usage
zoo1 = Zoo("My Awesome Zoo")
zoo1.add_animal("lion", "Simba")
zoo1.add_animal("monkey", "George")
zoo1.add_animal("bear", "Yogi")
zoo1.add_animal("lion", "Nala")

zoo1.print_all_info()
zoo1.feed_all_animals()
zoo1.print_all_info()

class SLNode:
    def __init__(self, val):
        self.value = val
        self.next = None

class SList:
    def __init__(self):
        self.head = None

    def add_to_front(self, val):
        new_node = SLNode(val)
        new_node.next = self.head
        self.head = new_node
        return self

    def print_values(self):
        runner = self.head
        while (runner != None):
            print(runner.value)
            runner = runner.next
        return self

    def add_to_back(self, val):
        if self.head == None:
            self.add_to_front(val)
            return self
        new_node = SLNode(val)
        runner = self.head
        while (runner.next != None):
            runner = runner.next
        runner.next = new_node
        return self

    def remove_from_front(self):
        if self.head is None:
            return None
        removed_val = self.head.value
        self.head = self.head.next
        return removed_val

    def remove_from_back(self):
        if self.head is None:
            return None
        if self.head.next is None:
            removed_val = self.head.value
            self.head = None
            return removed_val
        runner = self.head
        while runner.next.next is not None:
            runner = runner.next
        removed_val = runner.next.value
        runner.next = None
        return removed_val

    def remove_val(self, val):
        if self.head is None:
            return self
        if self.head.value == val:
            self.head = self.head.next
            return self
        runner = self.head
        while runner.next is not None and runner.next.value != val:
            runner = runner.next
        if runner.next is not None:
            runner.next = runner.next.next
        return self

    def insert_at(self, val, n):
        if n < 0:
            print("Cannot insert at a negative index.")
            return self

        new_node = SLNode(val)

        if n == 0:
            new_node.next = self.head
            self.head = new_node
            return self

        runner = self.head
        count = 0
        while runner is not None and count < n - 1:
            runner = runner.next
            count += 1

        if runner is None:
            # If n is greater than the length of the list, insert at the end
            # The loop above will make runner None if n-1 is beyond the list end
            # So, we need to find the last node to append
            if self.head is None:
                self.head = new_node
                return self
            temp_runner = self.head
            while temp_runner.next is not None:
                temp_runner = temp_runner.next
            temp_runner.next = new_node
        else:
            new_node.next = runner.next
            runner.next = new_node
        return self

# Test our class!
my_list = SList()    # create a new instance of a list
my_list.add_to_front("are").add_to_front("Linked lists").add_to_back("fun!").print_values()    # chaining, yeah!

# Test remove methods
print("\n--- Testing remove_from_front ---")
my_list_remove_front = SList().add_to_front(1).add_to_front(2).add_to_front(3)
my_list_remove_front.print_values()
removed = my_list_remove_front.remove_from_front()
print(f"Removed: {removed}")
my_list_remove_front.print_values()

print("\n--- Testing remove_from_back ---")
my_list_remove_back = SList().add_to_front(1).add_to_front(2).add_to_front(3)
my_list_remove_back.print_values()
removed = my_list_remove_back.remove_from_back()
print(f"Removed: {removed}")
my_list_remove_back.print_values()

print("\n--- Testing remove_val ---")
my_list_remove_val = SList().add_to_front(1).add_to_front(2).add_to_front(3).add_to_front(4).add_to_front(5)
print("Original list:")
my_list_remove_val.print_values()
print("Removing 3:")
my_list_remove_val.remove_val(3)
my_list_remove_val.print_values()
print("Removing 5 (head):")
my_list_remove_val.remove_val(5)
my_list_remove_val.print_values()
print("Removing 1 (tail):")
my_list_remove_val.remove_val(1)
my_list_remove_val.print_values()
print("Removing non-existent value (99):")
my_list_remove_val.remove_val(99)
my_list_remove_val.print_values()

# Test insert_at method
print("\n--- Testing insert_at ---")
my_list_insert = SList().add_to_front(1).add_to_front(2).add_to_front(3)
print("Original list:")
my_list_insert.print_values()

print("Inserting 0 at index 0:")
my_list_insert.insert_at(0, 0)
my_list_insert.print_values()

print("Inserting 4 at index 2:")
my_list_insert.insert_at(4, 2)
my_list_insert.print_values()

print("Inserting 5 at index 5 (end):")
my_list_insert.insert_at(5, 5)
my_list_insert.print_values()

print("Inserting 6 at index 10 (beyond end):")
my_list_insert.insert_at(6, 10)
my_list_insert.print_values()

print("Inserting 7 at negative index (-1):")
my_list_insert.insert_at(7, -1)
my_list_insert.print_values()

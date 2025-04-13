class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


# Given the head of a list and an int, appends
# a new node at the end and returns the head.
def append(head, new_data):

    # Create a new node
    new_node = Node(new_data)

    # If the Linked List is empty, make the 
    # new node as the head and return
    if head is None:
        return new_node

    # Store the head reference in a temporary variable
    last = head

    # Traverse till the last node
    while last.next:
        last = last.next

    # Change the next pointer of the last 
    # node to point to the new node
    last.next = new_node

    # Return the head of the list
    return head


# This function prints the contents of the 
# linked list starting from the head
def print_list(node):

    while node:
        print(node.data, end=" ")
        node = node.next


# Driver code
if __name__ == "__main__":

    # Create a hard-coded linked list: 
    # 2 -> 3 -> 4 -> 5 -> 6
    head = Node(2)
    head.next = Node(3)
    head.next.next = Node(4)
    head.next.next.next = Node(5)
    head.next.next.next.next = Node(6)

    print("Created Linked list is: ", end="")
    print_list(head)

    # Example of appending a node at the end
    head = append(head, 1)

    print("\nAfter inserting 1 at the end: ", end="")
    print_list(head)
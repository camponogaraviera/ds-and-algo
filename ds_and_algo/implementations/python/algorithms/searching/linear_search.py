# Arrays (Lists in Python):

array = ["a", False, 5]

# array.indexOf("a")
print(array.index("a"))  # 0
# array.findIndex((item) => typeof item === 'boolean')
print(next(i for i, item in enumerate(array) if isinstance(item, bool)))  # 1
# array.find((item) => item > 3)
print(next(item for item in array if isinstance(item, int) and item > 3))  # 5
# array.includes("a")
print("a" in array)  # True

# Hash Tables (Dictionaries in Python):
people = {
    1: {"name": "Alice", "age": 20},
    2: {"name": "Bob", "age": 25},
    3: {"name": "Charlie", "age": 30},
}

# Find the person whose age is greater than 25:
found_person = next((id, person) for id, person in people.items() if person["age"] > 25)
print(found_person)  # (3, {'name': 'Charlie', 'age': 30})

# Find the ID of the person whose name is Bob:
bob_id = next(key for key, value in people.items() if value["name"] == "Bob")
print(bob_id)  # 2

# Check for a given name:
name_exists = any(person["name"] == "Bob" for person in people.values())
print(name_exists)  # True

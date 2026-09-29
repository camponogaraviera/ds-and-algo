"""Demonstrate references for immutable and mutable objects.

Notes:
    - Immutable assignments copy values, so changes do not affect other variables.
    - Mutable assignments share references, so changes affect both variables.
"""

print("\n######## Immutable Objects ########\n")

print("Assigning immutable data types to variables:\n")

val1 = 10
val2 = val1
print(f"val1 = {val1}")
print(f"val2 = {val2}")
print(f"Do identifiers match: {id(val1) == id(val2)}")

print("\nUpdating one variable does not update the other:\n")

val1 *= 2
print(f"val1 = {val1}")
print(f"val2 = {val2}")
print(f"Do identifiers match: {id(val1) == id(val2)}")

print("\n######## Mutable Objects ########\n")

print(
    "Assigning mutable data types to variables, i.e., creating a new reference "
    "that points to the same object in memory:\n"
)

d1 = {"key1": 0}
d2 = d1
print(f"d1 = {d1}")
print(f"d2 = {d2}")
print(f"Do identifiers match: {id(d1) == id(d2)}")

print("\nUpdating `d1` also updates `d2`:")

d1["key1"] = 1
print(f"d1 = {d1}")
print(f"d2 = {d2}")
print(f"Do identifiers match: {id(d1) == id(d2)}")

print("\nUpdating `d2` also updates `d1`:")
d2["key1"] = 2
print(f"d1 = {d1}")
print(f"d2 = {d2}")

print("\nReassigning  either variable  removes the reference:")
d1 = {}
print(f"d1 = {d1}")
print(f"d2 = {d2}")

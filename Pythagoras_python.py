from math import sqrt
from time import sleep

print("Hypotenues Calculator")
side_a = float(input("Enter the value of a:"))
side_b = float(input("Enter the value of b:"))
hyp = sqrt(side_a**2 + side_b**2)

print(f"Hypotenues Is", hyp)

sleep(5)
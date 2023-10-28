from datetime import date
from time import sleep

print("AGE CALCULATOR")

day = int(input("DD"))
month = int(input("MM"))
year = int(input("YYYY"))

today = date.today()
age = today.year - year - ((today.month, today.day) < (month, day))
print(age)

sleep(5)
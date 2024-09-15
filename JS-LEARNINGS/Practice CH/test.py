import os

folder = os.getcwd()
n = int(input("Enter the number of files you want to create: "))
prefix = input("Enter prefx: ")
suffix = input("Enter suffix: ")
ext = input("Extension (don't add '.'): ")

for i in range(1, n+1):
    with open(f"{prefix}{i}{suffix}.{ext}", "w"):
        pass

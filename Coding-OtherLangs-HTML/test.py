from pyperclip import copy

code = ""

for i in range(1, 7):
    code += f"<h{i}>Hello World || h{i}</h{i}>\n"

copy(code)
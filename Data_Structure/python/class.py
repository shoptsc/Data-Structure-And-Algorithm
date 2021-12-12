# class Player:
#     def __init__(self, name, type):
#         print("Player", self)
#         self.name = name
#         self.type = type

#     def introduce(self):
#         print(f"Hi I am {self.name}, i am a {self.type}")

# class Wizard(Player):
#     def __init__(self, name, type):
#         super().__init__(name, type)
#         print("Wizard", self)
#     def play(self):
#         print(f"Weeeee I'm a {self.type}")


# wizard1 = Wizard("Shelly", "healer")
# wizard2 = Wizard("Shawn", "Dark Magic")
        
# print(wizard1.introduce())


li = range(2, 10)
for i in li:
    print(i)
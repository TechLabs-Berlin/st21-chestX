import sys
import json
print('Output from Python')
# print("I couldn't get the name out though..LOL")
print('First name: ', + sys.argv[1])
print('Last name: ', + sys.argv[2])

#  this is a demonstration of how we can communicate with python files from DS/AI groups
#  you can paste the below url in the browser
#  http://localhost:8081/name?firstname=Fatih Mehmet&lastname=Nuroglu

parsed = json.loads(sys.argv[1])
print(json.dumps(parsed))
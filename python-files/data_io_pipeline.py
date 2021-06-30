from fastai.vision.all import load_learner, parent_label
import os

# Function for binary labelling
root_dir = os.path.abspath('.')
img_location = os.listdir("backend-chest-X/public/")

def label_func(fname):
    if parent_label(fname)=="Lung_Opacity":
        return 0
    if parent_label(fname)=="Normal":
        return 0
    if parent_label(fname)=="Viral Pneumonia":
        return 0
    else:
        return 1

model = load_learner(root_dir+"/data-science/binary_model.pkl")
lable = model.predict(root_dir+"/public/"+img_location[0])
# printing the result into STDOUT for node.js to catch and process for front-end display
print(lable[0])
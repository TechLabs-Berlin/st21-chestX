from fastai.vision.all import load_learner, parent_label
import os

def get_xray_image(location="backend-chest-X/public/"):
    return os.listdir(location)

def get_rootdir():
    return os.path.abspath('.')

# Function for fastai binary labelling 
def label_func(fname):
    if parent_label(fname)=="Lung_Opacity":
        return 0
    if parent_label(fname)=="Normal":
        return 0
    if parent_label(fname)=="Viral Pneumonia":
        return 0
    else:
        return 1

def predict_label(model="/data-science/binary_model.pkl"):
    #print("---> ROOTDIR:", get_rootdir())
    model = load_learner(get_rootdir()+model)
    lable = model.predict(get_rootdir()+"/backend-chest-X/public/"+get_xray_image()[0])
    # printing the result into STDOUT for node.js to catch and process for front-end display
    return lable[0]

if __name__ == "__main__":
    p = predict_label()
    print(p)
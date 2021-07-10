from PIL import Image
import os

def get_rootdir():
    return os.path.abspath('.')

def verify(location):
    '''Function to verifie x-ray images from a given foulder'''
    for x_image in os.listdir(location):
        print(x_image)
        try:
            img = Image.open(x_image)
            #img.verify() check if file is a valid image, png only
            img.getdata()[0] #check if file is corrupted
        except OSError:
            return False
        return True

if __name__ == "__main__":
    print(verify(str(os.path.abspath('.'))+'/public'))
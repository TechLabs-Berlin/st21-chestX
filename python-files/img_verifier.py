from PIL import Image
import os

def get_rootdir():
    return os.path.abspath('.')

def verify(location):
    '''Function to verify x-ray image corruption from a given folder'''
    for x_image in os.listdir(location):
        try:
            img = Image.open(x_image)
            print(img.getdata()[0]) #check if file is corrupted
        except OSError:
            return False
        return True

if __name__ == "__main__":
    print(verify(str(os.path.abspath('.'))+'/public'))

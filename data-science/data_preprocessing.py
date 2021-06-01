import os
import pandas as pd
'''WIP file for data pre-processing of data from:
https://www.kaggle.com/tawsifurrahman/covid19-radiography-database'''

def rootdir(): 
    return os.path.abspath('.')

def get_covid_data(path):
    df_covid = pd.read_excel(path)
    print(df_covid.shape)
    return df_covid


# ----> Please, make changes to the input path variable below this line.

if __name__ == "__main__":
    path = rootdir()+'/data-science/COVID_metadata.xlsx'
    df = get_covid_data(path)
    print(df.tail())

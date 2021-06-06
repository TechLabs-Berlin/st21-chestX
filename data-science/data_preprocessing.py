import os
import pandas as pd
'''Script for pre-processing data from:
https://www.kaggle.com/tawsifurrahman/covid19-radiography-database
Find original data cleaning notebook here:
https://www.kaggle.com/quosi23/covid-19-notebook'''

def rootdir(): 
    return os.path.abspath('.')

def get_covid_data(path):
    '''Returns a balanced data set based on covid19-radiography-database
    INPUT: Path to meta-data files './COVID-19_Radiography_Dataset/'
    OUTPUT: pandas DataFrame incl. filename and covid-label [0/1]'''

    df_covid = pd.read_excel(os.path.abspath(path+'/COVID.metadata.xlsx'))
    df_lung = pd.read_excel(os.path.abspath(path+'/Lung_Opacity.metadata.xlsx'))
    df_normal = pd.read_excel(os.path.abspath(path+'/Normal.metadata.xlsx'))
    df_viral = pd.read_excel(os.path.abspath(path+'/Viral Pneumonia.metadata.xlsx'))

    # create full filename
    df_covid['filename'] = df_covid['FILE NAME'] + "." + df_covid['FORMAT'].str.lower()
    df_lung['filename'] = df_lung['FILE NAME'] + "." + df_lung['FORMAT'].str.lower()
    df_normal['filename'] = df_normal['FILE NAME'] + "." + df_normal['FORMAT'].str.lower()
    df_viral['filename'] = df_viral['FILE NAME'] + "." + df_viral['FORMAT'].str.lower()
    # create COVID label
    df_covid['label'] = 1
    df_lung['label'] = 0
    df_normal['label'] = 0
    df_viral['label'] = 0

    # calc samples for balanced data set
    samples = round(df_covid.shape[0]/3)
    # rounding the third of samples, and adding 1 sample later to reach balanced data set
    df_result = pd.concat([df_covid, df_lung.sample(samples), df_normal.sample(samples+1), df_viral.sample(samples)])
    # shuffel rows and drop unecessary columns
    df_result = df_result.sample(frac = 1).drop(['FILE NAME', 'FORMAT', 'SIZE', 'URL'], axis = 1).reset_index(drop=True)

    assert df_result[df_result['label']==0].count()[0] == df_result[df_result['label']==1].count()[0] == samples*3+1, "Mismatching number of data samples."
    print(f'--> Returning {(samples*3+1)*2} balanced data samples for test and training.')
    return df_result

# ----> Please, make changes to the input path variable below this line, when using this script.
# ----> Or copy the get_covid_data() function into a Colab / Jupyter notebook and feed in the correct file path.

if __name__ == "__main__":
    path = rootdir()+'/data2'
    print("--> Scraping data from:",path)
    df = get_covid_data(path)
    print('--> PREVIEW: \n', df.head(5))

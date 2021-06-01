import pandas as pd
import os, math

def img_type_selection(df, img_type = ['PA', 'AP', 'AP Supine']):
    '''Selection of usable data for ChestX project, based on IEEE-8023 covid-chest-x-ray data set.
    INPUT: (mandatory) metadata.csv as pandas data frame; (not mandatory) x-ray image types as list of strings.
    OUTPUT: returns pandas data frame including 'usefull' data for AI training, like 'filename' etc.'''

    selected_samples_nr = 0
    df_select = pd.DataFrame(columns=df.columns)

    for t in img_type:
        selected_samples_nr += df['view'].value_counts()[t]
        df_select = df_select.append(df.loc[(df['view']==t)])

    rejected_samples_nr = df['view'].value_counts().sum() - selected_samples_nr
    print("selected samples:", selected_samples_nr)
    print("rejected samples:", rejected_samples_nr)
    assert df_select.shape[0] == selected_samples_nr, 'Mismatching number of selected samples.'
    return df_select

def split_data_for_training(df, test = 30, train = 70):
    '''Function expected a pandas DataFrame as input and returns a pandas DataFrame, 
    containing a balanced data set of COVID and no-COVID data samples.
    The percentage of test and training data can be changed: <int> [1 ... 100]
    Default value is: test = 30, train = 70'''
    covid = df['finding'].value_counts()['Pneumonia/Viral/COVID-19']
    no_covid = df['finding'].value_counts().sum() - covid
    df_covid = df[df['finding']=='Pneumonia/Viral/COVID-19']
    df_nocovid = df[df['finding']!='Pneumonia/Viral/COVID-19']

    covid_samples = df_covid.sample(min(covid, no_covid))
    nocovid_samples = df_nocovid.sample(min(covid, no_covid))
    n_samples = math.ceil((len(covid_samples.index)/100)*test)
    m_samples = math.floor((len(covid_samples.index)/100)*train)

    df_covid_test = covid_samples.sample(n_samples)
    df_nocovid_test = nocovid_samples.sample(n_samples)

    df_covid_train = covid_samples.drop(df_covid_test.index)
    df_nocovid_train = nocovid_samples.drop(df_nocovid_test.index)

    assert len(df_covid_test) == len(df_nocovid_test) == n_samples, "Number of test-data samples is inaccurate."
    assert len(df_covid_train) == len(df_nocovid_train) == m_samples, "Number of train-data samples is inaccurate."

    print(f'Returning {m_samples} data samples for training.')
    print(f'Returning {n_samples} data samples for testing.')
    print(f'Samples selected from {covid} COVID-19 positiv and {no_covid} COVID-19 negatice cases.')
    return df_nocovid_test, df_nocovid_train, df_covid_test, df_covid_train

if __name__ == "__main__":
    df = pd.read_csv(os.path.abspath('.') + '/data/metadata.csv')
    df_img = img_type_selection(df)
    df_split = split_data_for_training(df_img)
    print(df_split)


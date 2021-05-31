import pandas as pd
import os

def data_selection(df, img_type = ['PA', 'AP', 'AP Supine']):
    '''Selection of usable data for ChestX project, based on IEEE8023 covid-chestxray dataset.
    INPUT: (mandatory) metadata.csv as pandas data frame; (not mandatory) x-ray image types as list of strings.
    OUTPUT: returns pandas data frame including 'usefull' data for AI training, like 'filename' etc.'''
    #df = pd.read_csv(os.path.abspath('.')+'/data/metadata.csv')
    selected_samples_nr = 0
    df_select = pd.DataFrame(columns=df.columns)

    for t in img_type:
        selected_samples_nr += df['view'].value_counts()[t]
        x = df.loc[(df['view']==t)]
        df_select = df_select.append(x)

    rejected_samples_nr = df['view'].value_counts().sum() - selected_samples_nr
    print("selected samples:", selected_samples_nr)
    print("rejected samples:",rejected_samples_nr)
    assert df_select.shape[0] == selected_samples_nr, 'Mismatching number of selected samples.'
    return df_select
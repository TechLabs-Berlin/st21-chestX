from fastai.vision.all import load_learner

learn_inf = load_learner("/Users/hquos/Projects/x_others/TechLabs_Bln/projectRepos/st21-chestX/data-science/binary_model.pkl") 

# Predict COVID on test image
learn_inf.predict('/Users/hquos/Projects/x_others/TechLabs_Bln/projectRepos/st21-chestX/data/images/000001-1.png')
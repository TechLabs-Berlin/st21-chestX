from fastai.vision.all import load_learner

class PipelineIO:
    model_path="/Users/hquos/Projects/x_others/TechLabs_Bln/projectRepos/st21-chestX/data-science/binary_model.pkl"

    def __init__(self, img_path):
        self.img_path = img_path

    def predict_label(self):
        print(self.model_path)
        model = load_learner(self.model_path)
        lable = model.predict(self.img_path)

        return int(lable)

if __name__ == "__main__":
    m = PipelineIO('/Users/hquos/Projects/x_others/TechLabs_Bln/projectRepos/st21-chestX/data/images/0a7faa2a.jpg')
    x = m.predict_label()
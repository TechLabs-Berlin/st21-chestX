# st21-chestX
<b>ChestX</b> is a <b>TechLabs Berlin</b> project that aims to detect COVID-19 infection by processing chest X-ray images. To support medical decision making, the ChestX team wants to apply AI techniques for object detection & classification, as well as data science methods. Metadata provided alongside the X-ray images can be analysed to provide doctors with more meaningful diagnostic assistance.

## Data set
The COVID-19 image data collection is a public open dataset of chest X-ray and CT images of patients which are positive or suspected of COVID-19 or other viral and bacterial pneumonias. The project was started and is maintained by Joseph Paul Cohen, Paul Morrison, and Lan Dao from the University of Montreal.
Please, watch the following [video](https://www.youtube.com/watch?v=ineWmqfelEQ) for a quick project introduction, or check out there [paper](https://arxiv.org/abs/2003.11597) for more details about the [data set](https://github.com/ieee8023/covid-chestxray-dataset).

This COVID-19 data set is linked as submodule to this git project. <br>Run the following code to download the submodule:
```git submodule update --init --recursive```
<br>To update the submodul run:
```git submodule update --remote --merge```

## Related research & solutions 
Referencing the COVID-19 image data collection repository, some ML models were developed alongside the data collection process and constitute the main purpose of this research project. A valuble source is the repo from Linda Wang and her team. The repo contains pre-trained models.
- [https://github.com/lindawangg/COVID-Net/](https://github.com/lindawangg/COVID-Net/)

Other noteworthy projects using this data set:
- [https://github.com/aildnont/covid-cxr](https://github.com/aildnont/covid-cxr)
- [Covid-19-covid CNN model - Github repo](https://github.com/Thehunk1206/Covid-19-covidcnn)
- [Covid-scanner Web-App](https://covid-scanner.herokuapp.com/)
- [Colab Notebook](https://colab.research.google.com/drive/1A-gIZ6Xp-eh2b4CGS6BHH7-OgZtyjeP2)

Noteworthy papers & research:
- https://arxiv.org/abs/2003.11597
- WIP ...

Ongoing Kaggle competition based on another data set:
- https://www.kaggle.com/c/siim-covid19-detection/data
The images are available in a medical image format - DICOM or /*.dcm

## Team members
- DS | Heike
- DS | Jason Choufani
- DS | Assumpta Ojukwu
- DS | FabianB
- AI | Kevin G.
- AI | Ehiz Ali
- UX | Sofia Sabarini
- UX | Nina Thom
- WD | Omobolaji Koyi
- WD | Martin Schöne

## Mentor
- Aleksandr Shubenkov

## Tech Stack

- Python3
- Python libs: pandas, numpy, matplotlib, (tf.image, tf.keras), pillow, etc.
- [TensorFlow](https://www.tensorflow.org/tfx/guide/)
- Git & GitHub
- Colab notebooks
- PyCharm (or other IDE - personal choice)
- venv
- WIP ...


## Important TechLabs links
- Miro: [miro.com/app/board/o9J_lGWlTNE=/](miro.com/app/board/o9J_lGWlTNE=/)
- GitHub: [github.com/TechLabs-Berlin/st21-chestX](github.com/TechLabs-Berlin/st21-chestX)
- CoLab: [from Fabian](https://colab.research.google.com/drive/1K3VODIYNN8ormpYs7UDluaWCloU6Mpn0?authuser=1#scrollTo=dtsd3u3oE5Tg)
- [Project Weekly Subteams Updates Doc](https://docs.google.com/document/d/1TkIcdisPCkTXx0eKFZnw-JZAVFeyc5wFi7jbVkmOwUY/edit)
- [Project Weekly Submission Form](https://techlabsorg.typeform.com/to/m9cEYlR6)
- [Project Weekly Updates - All ST21 projects](https://www.notion.so/techlabs/Project-Weekly-Updates-ST21-dfb52c9064ad44dc945613e4b66f7ae1)

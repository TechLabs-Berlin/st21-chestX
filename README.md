# st21-chestX
<b>ChestX</b> is a <b>TechLabs Berlin</b> project that aims to detect COVID-19 infection by processing chest X-ray images. To support medical decision making, the ChestX team wants to apply AI techniques for object detection & classification, as well as data science methods. Metadata provided alongside the X-ray images can be analysed to provide doctors with more meaningful diagnostic assistance.

## Data set
The COVID-19 image data collection is a public open dataset of chest X-ray and CT images of patients which are positive or suspected of COVID-19 or other viral and bacterial pneumonias. The project was started and is maintained by Joseph Paul Cohen, Paul Morrison, and Lan Dao from the University of Montreal.
Please, watch the following [video](https://www.youtube.com/watch?v=ineWmqfelEQ) for a quick project introduction, or check out their [paper](https://arxiv.org/abs/2003.11597) for more details about the [data set](https://github.com/ieee8023/covid-chestxray-dataset). <br> To complement the data we found suitable after data-cleaning, x-ray images from [this covid19 radiography database](https://www.kaggle.com/tawsifurrahman/covid19-radiography-database) were also added to this project for AI training. 

The COVID-19 data sets is linked as submodule to this git project. <br>Run the following code to download the submodule:
```git submodule update --init --recursive```
<br>To update the submodul run:
```git submodule update --remote --merge```

Do download the second data set, please run this CML to connect to the kaggle API:<br>
```kaggle datasets download -d tawsifurrahman/covid19-radiography-database```

## Related research & solutions 
Referencing the COVID-19 image data collection repository, some ML models were developed alongside the data collection process and constitute the main purpose of this research project. A valuble source is the repo from Linda Wang and her team. The repo contains pre-trained models.
- [https://github.com/lindawangg/COVID-Net/](https://github.com/lindawangg/COVID-Net/)

Other noteworthy projects using this data set:
- [https://github.com/aildnont/covid-cxr](https://github.com/aildnont/covid-cxr)
- [Covid-19-covid CNN model - Github repo](https://github.com/Thehunk1206/Covid-19-covidcnn)
- [Covid-scanner Web-App](https://covid-scanner.herokuapp.com/)
- [Colab Notebook](https://colab.research.google.com/drive/1A-gIZ6Xp-eh2b4CGS6BHH7-OgZtyjeP2)

Noteworthy papers & research:
- [https://arxiv.org/abs/2003.11597](https://arxiv.org/abs/2003.11597)
- [Histogramm Hack on CXR classification](https://melaniesoek0120.medium.com/covid-19-hack-chest-x-ray-image-classification-with-neural-network-59cd031e9b0d)
- WIP ...

Ongoing Kaggle competition based on another data set:
- https://www.kaggle.com/c/siim-covid19-detection/data
The images are available in a medical image format - DICOM or /*.dcm

## Running the project on localhost
After clonning the repository, and having the complete project files saved in a directory on you computer, open the project folder with your desired editor.

To run the frontend part of the project:
- Navigate to the directory of the frontend files: ```cd frontend-chest-X```
- Install node.js on your computer if you do not already have it installed [node.js](https://nodejs.org/en/)
- To check the version of node.js you have installed, type: ```node -v```
- Install angular globally: ```npm install -g @angular/cli```
- To install all the frontend dependencies: ```npm install```
- To open the frontend on localhost: ```ng serve --port 4200```

Setting up the database 
- Install [MongoDB](https://zarkom.net/blogs/how-to-install-mongodb-for-development-in-windows-3328) on windows
- Install [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) on mac
- Install [MongoDB compass](https://www.mongodb.com/try/download/compass) for managing the database

To run the backend part of the project:
- Navigate to the directory of the backend files: ```cd backend-chest-X```
- To install all the backend dependencies: ```npm install```
- run ```npm i nodemon```
- To run the backend server: ```nodemon server.js``` or ```node server.js```

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
- [Fastai](https://www.fast.ai/)
- Git & GitHub
- Colab notebooks
- PyCharm (or other IDE - personal choice)
- venv
- Angular
- Node.js and Express
- MongoDB and Mongoose
- WIP ...

## Important TechLabs links
- Miro: [miro.com/app/board/o9J_lGWlTNE=/](miro.com/app/board/o9J_lGWlTNE=/)
- GitHub: [github.com/TechLabs-Berlin/st21-chestX](github.com/TechLabs-Berlin/st21-chestX)
- CoLab: [from Fabian](https://colab.research.google.com/drive/1K3VODIYNN8ormpYs7UDluaWCloU6Mpn0?authuser=1#scrollTo=dtsd3u3oE5Tg)
- [Project Weekly Subteams Updates Doc](https://docs.google.com/document/d/1TkIcdisPCkTXx0eKFZnw-JZAVFeyc5wFi7jbVkmOwUY/edit)
- [Project Weekly Submission Form](https://techlabsorg.typeform.com/to/m9cEYlR6)
- [Project Weekly Updates - All ST21 projects](https://www.notion.so/techlabs/Project-Weekly-Updates-ST21-dfb52c9064ad44dc945613e4b66f7ae1)

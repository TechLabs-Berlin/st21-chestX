# ChestX Project Summary

ChestX offers an alternative diagnostic tool for COVID-19 with the help of deep learning image recognition. A frontal chest x-ray (CXR) can be uploaded onto the webapp which provides an  instantaneous diagnosis. ChestX offers a secure method for waste and pain free COVID-19 testing. To understand the need and use cases for a COVID-19 test based on CXRs, a user survey was conducted. The web app’s design which was drafted in Figma and Photoshop came to life in the web frontend via Angular. Through the web backend written in Node.js and Express the website computes it’s key functionalities of creating a user profile, uploading an image, and receiving a prediction were implemented. The images are stored in a MongoDB database and retrieved via Mongoose. Additional features that were written in Python include image validation and the connection between AI model and web backend. Potential datasets were analysed in Jupyter notebooks with the help of Pandas, Numpy, Matplotlib and Seaborn. The image recognition model is based on a convolutional neural network implemented with the Fastai library. A large open source image dataset served as the model’s training ground containing 3616 COVID-19 positive cases, 10192 Normal, 6012 Lung Opacity (Non-COVID lung infection), and 1345 Viral Pneumonia images. We worked 100 % remotely with the help of GitHub, Miro Board, and Slack as our main communication channels. Primary language in our international team was English.
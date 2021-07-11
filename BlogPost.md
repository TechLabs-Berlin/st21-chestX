# ChestX Blogpost

![alt text](https://github.com/TechLabs-Berlin/st21-chestX/blob/main/Blog%20Images/Logo.png)

**Group:** ChestX

Members:

- Mentor: Aleksandr Shubenkov
- DS: Heike Quosdorf, Jason Choufani, Assumpta Ojukwu and Fabian Barulli
- AI: Kevin Gräf and Ehiz Ali
- UX: Sofia Sabarini and Nina Thom 
- WD: Omobolaji Koyi and Martin Schöne


# 1. Project summary

At the end of 2019, the first known case of the SARS-CoV-2 was identified. Soon after, the contagious disease started spreading all over the world, leading to the ongoing pandemic we are currently living through today.Several testing methods have been developed to diagnose the disease, such as the PCR test which requires you to go to hospital or quick tests that are found in stores. The latter, though convenient, can lead to inaccurate results and produces plastic waste.
ChestX is a TechLabs Berlin project that aims to detect COVID-19 infection by processing chest X-ray images. To support medical decision making, the ChestX team applied AI techniques for object detection &amp; classification, as well as data science methods. Metadata provided alongside the X-ray images can be analysed to provide doctors with more meaningful diagnostic assistance. This solution offers an alternative diagnostic tool for COVID-19 that is safe, secure, waste free and causes no discomfort to patients.

#

# 2. WD-Track

To start the project off we decided to go with Angular as our tech stack setup, since Bolaji already had some experience with it. This turned out to be a good decision since the setup was done very quickly and the structure also showed to be similar to react. Due to Bolajis prior experience with it, it also helped us to move along in the project quickly.

Regarding the frontend of the Chest X App, we started by putting together the main screen to upload a picture - this was the first version and it proved to have the main frontend functionality that we needed. Later on when the UX team had the figma screens and user flow designed, we added a home screen and designed the items very similar like they were designed in figma. We added the pages „welcome&quot;, „patient-credentials&quot;, and a footer and header to make the appearance and user journey complete. For the backend Bolaji set up the database and connected the upload photo functionality with it. Another important step was connecting the AI component that evaluates whether a patient had covid or not, with the backend. The connecting of AI and backend took a bit longer but was finally successfully done.

Bolaji and I worked together smoothly and met up (digitally) on almost a weekly basis and discussed the further steps and open topics. Often Bolaji helped me out with code not working or errors in vs code which was extremely helpful since getting into a coding project from zero felt oftentimes a bit overwhelming. In total the project felt like a good starting project that combined all the different disciplines of Techlabs.

![alt text](https://github.com/TechLabs-Berlin/st21-chestX/blob/main/Blog%20Images/WD.PNG) 

Image WD1: Frontend json.

# 3. AI-Track

My part of the project was to train a binary classification model to detect COVID-19 from chest x-ray images.

In the following, we will go through our progressions during the project phase, some of the obstacles that we encountered and the solutions that we implemented to push through them.

- Work environment: Worked with Google Colab in the beginning but because their free GPU service is often unavailable we switched to Kaggle.
- Dataset: I started with a rather small dataset from GitHub which only contained about 300 relevant training images. The resulting model had poor performance. The search for a larger dataset was easy but finding one that was well organised not so much. Thankfully we found a very useful and structured Kaggle dataset. Before I discovered the integrated fastAI function of taking labels from the parent directory, Heike coded this from scratch.

![alt text](https://github.com/TechLabs-Berlin/st21-chestX/blob/main/Blog%20Images/image%20(1).png)
 
 Image AI1: X-ray examples.

- With the larger dataset, it was a piece of cake to create an accurate classifier model. A basic ResNet18 model trained for six epochs already achieved 99% accuracy.

![alt text](https://github.com/TechLabs-Berlin/st21-chestX/blob/main/Blog%20Images/image.png)

Image AI2:Model accuracy results.

- Team issues: Unfortunately, my AI team member wasn&#39;t able to contribute to the project due to private reasons.
- Find tasks for DS team members: What can the DS team members contribute besides training a computer vision model? But I had to sort out my responsibilities first and review key points from the academic phase.

#

# 4. DS-Track

Our project journey from the Data Science perspective also involved extracting and gathering insightful knowledge about the data to be able to narrow down and pick the right samples and features of that data set. In detail this means, we clustered the data into categories (age groups, survival rate, type of x-ray images, etc.) to get a more insightful perspective. Visualizing the distribution of these specific parts of our data set helps to showcase findings to everyone outside the unique world of a Jupyter notebook.

The mentioned graphs brought us to the conclusion that it is possible to only use x-ray images and not to include CT images in our test and train data. We also realized to rather focus on the type of images that were taken from a frontal perspective. Those viewing angles are abbreviated as &quot;AP&quot;, &quot;AP Supine&quot; and &quot;PA&quot; in the comprehensive metadata information.

![alt text](https://github.com/TechLabs-Berlin/st21-chestX/blob/main/Blog%20Images/DS1.png)


Image DS1:
Distribution of view angle in which x-ray images were taken.

![alt text](https://github.com/TechLabs-Berlin/st21-chestX/blob/main/Blog%20Images/DS2.png)


Image DS2:
Distribution of image modality of the dataset images.


Other findings from the data analysis generally helped to broaden our understanding about the COVID-19 medical conditions, but also guided the decision of a smarter implementation for splitting the dataset into test and training data. To have an equally distributed data set from the start that would similarly include data from positive and negative cases, but also include a positive and negative survival rate was an outcome of this analysis.

![alt text](https://github.com/TechLabs-Berlin/st21-chestX/blob/main/Blog%20Images/DS3.png)


Image DS3:
Distribution of survival rate of patients, found in the data set.

![alt text](https://github.com/TechLabs-Berlin/st21-chestX/blob/main/Blog%20Images/DS4.png)


Image DS4:
Python script for execution of COVID-19 prediction and handover of result to web backend.

After the first phase of data analysis the useful environment of Jupyter notebooks had to give way to simple Python scripts that are easier to implement into the whole pipeline of data cleaning, preparation and web application for user interaction. However additional processes that are executed in the background of the web application include the validation of uploaded x-ray images and the connection between the AI model, which predicts the binary result of a COVID-19 infection on the chest x-ray images and the web backend.
 Another important point function we worked on as a DS team was making sure that uploaded pictures are valid. That is why we also implemented an image verification function using python and the PIL package, to make sure uploaded images are not corrupted.

# 5. UX-Track

The UX team focused on figuring out what problem the application could solve – done by a benchmark analysis of similar applications and what they were used for. One of the challenges was working in reverse – while the UX track taught us to first identify a problem and then base a solution on it, our team rather had an existing solution but no problem to fix.

Nevertheless, we continued until a problem frame was defined, as well as a user scenario – and transitioned to identifying who our users would be. The ones found were either doctors, test-center workers, or patients – in the end, the team settled on test-center workers. ![alt text](https://github.com/TechLabs-Berlin/st21-chestX/blob/main/Blog%20Images/Customer_Journey.PNG)
Image UX1: Customer journey.

When creating a persona however, another challenge was basing the insights mostly on assumptions – mainly because when online surveys were created to target test-center workers, only 1 response was collected. Another difficulty was losing the other UX-track student, who suddenly disappeared in the middle of the project and having to make most UX-decisions by one person consequently. Luckily, members from other tracks within the group were happy to share their opinions and perspectives instead.

![alt text](https://github.com/TechLabs-Berlin/st21-chestX/blob/main/Blog%20Images/Persona.jpg)

Image UX2: Persona.

The last part the UX-team was responsible for, was creating the Figma prototype, as well as graphical assets via photoshop.
![alt text](https://github.com/TechLabs-Berlin/st21-chestX/blob/main/Blog%20Images/Start_page.jpg)
Image UX3: Start page.

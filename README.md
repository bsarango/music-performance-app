# Music Performance App

Musician Performance App is designed to help musicians prepare, practice, and perform songs live by having general notes, ideas, and tips when performing Live to reference before and in between songs. 

# Installation 
To install the app, perform the following to clone a copy of the application repository to your system.

First, access the repository from the following link

https://github.com/bsarango/music-performance-app

Click on the FORK button. On the new loaded page, click on clone repository. Once selected, the screen will return to the previosu page. Click on green CODE button and copy the link in SSH format.

Next, open two windows in Terminal. In the FIRST window, open the directory that you want to clone the Application to. Then enter the following into Terminal

```bash
git clone git@github.com:bsarango/music-performance-app.git
```

Once, cloned, cd into the the cloned repository

```bash
cd /currentDirector/music-perforamnce-app
```

 Once in the application directory, enter the following to install all the packages necessary to run the App

```bash
npm install
```

In the SECOND Terminal Window, start the JSON server by going into the same Directory as the FIRST Window and entering the following command into the Terminal

```bash
json-server --watch db.json
```

This will start the JSON server in Terminal that is necessary for the Application to send fetch request.

Lastly, in the FIRST terminal, input the following command to start the app in your browser

```bash
npm start 
```

# ROADMAP
The application has room to add features such as a remove or edit button and displaying more information such as the actual video of the link that is being referenced. Additional CSS can be added to enhance the visual and positions of the text and form of the app.

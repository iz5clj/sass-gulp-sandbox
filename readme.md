#SASS - GULP
Basic startup for a simple website based on **sass** (css preprocessor) and **gulp** (task manager).

##Requirements

You need **gulp** installed globaly: npm install -g gulp

You need **bower** installed globaly: npm install -g bower

>Optional - For quicker installation (installing gulp localy)

>You may install marked globaly: npm install -g marked

>you may install node-gyp globaly: npm install -g node-gyp

##Installation

Run:
    
    npm install
This command will do the following:

1. Clear the screen
2. Install gulp and all dependencies
3. Install bower
4. Run bower install

##Tasks

To start the webserver:

    gulp serve

>This will create the styles.css file, the main.js file and run the webserver in background.

To compile the sass files

    gulp sass

To concat all javascript files

    gulp javascript    


##TODO

1. From a gulp task, check if jquery files exist in *bower_components* and if not run **bower install**


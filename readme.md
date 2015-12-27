#SASS - GULP
Basic startup for a simple website based on **sass** (css preprocessor) and **gulp** (task manager).

##Installation

Run:

    npm install

This will install

1. gulp and all the dependencies
2. bower
3. install jquery with bower

##Tasks

1. To start the webserver:

    gulp serve

This will create the styles.css file, the main.js file and run the webserver in background.

2. To compile the sass files

    gulp sass

3. To concat all javascript files

    gulp javascript    


##TODO

1. From a gulp task, check if jquery files exist in *bower_components* and if not run **bower install**


# SASS - GULP
Basic startup for a simple website based on **sass** (css preprocessor) and **gulp** (task manager).

## Requirements
I highly recommend using [nvm](https://github.com/creationix/nvm) (node version manager)

You need **gulp** to be installed globaly: [sudo]npm install -g gulp

You need **bower** to be installed globaly: [sudo]npm install -g bower

## Installation

Run:

    npm install
This command will do the following:

1. Install gulp and all dependencies
2. Install bower
3. Run bower install

## Tasks

To start the webserver:

    gulp serve

>This will create the styles.css file, the main.js file and run the webserver in background.

To compile the sass files

    gulp sass

To concat all javascript files

    gulp javascript    


## TODO

1. From a gulp task, check if jquery files exist in *bower_components* and if not run **bower install**

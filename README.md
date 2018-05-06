# SQAT06 - Assignment 1
# steps to start a selenium project
# first step is to install node.js onto your system from the nodejs.org website (this will install npm on your system as well)
# then you must install webdriverio onto your system through npm using npm  install webdriver.io
# after you must install selenim-standalone through npm using the command npm install selenium-standalone -g to install globally
# then you create a directoty on your computer that will hold all the nessecary files for the test
# once you have the diecrtory on your system, install selenium-standalone and webdriverio locally on the diecrtory
# you must have a package.json file in your project folder so that your framework is defined
# you will write a javascript file for the script you want to execute, saving the file with a .js file
# once you have written the script, you have to run the script through selenium
# you will then go to command prompt and start a selenium server by entering selenium-standalone start
# then you will execute the file using node filename.js


# SQAT06 Assignment 2
# Cucumber uses plain simple commans to execute a test.
# A cucumber project needs to follow a specific format.
# For a cucumber project you need to have 4 main files:
#   1) a .feature File
#       - this is where your plain english instructions are.  the basic structure is Given, when,    #       and then. cucumber knows these commands and exceuted each line one by one.  
#   2) a steps.js file
#       -   this is where all the scripts for the steps that are being used in the feature file are. #       -   each step in the feature file has a script for it, if it does not, your test will run                but not be 100% sucesful
#   3) a world.js file
#        - this file has all classes and fuctions that you are going to use throughout ay test.      #          this way you can keep your steps file clean and simple and not as confusing.
#   4) hooks.js file
#       - this contains scripts that you want to run before or after your scenario has run.
#         this is good to catch scrrenshots of errors that come up when running the test.
#
# Once you have completed writting your test scripts, you will then have to run the script. 
# 
# before you run the test always ensure that you have the selenium server by exectuing selenium-standalone start in the command prompt.
#
# When wrtting a teat case, it is good practice to have some sort of assretion to   make sure that the   desired test result was recieved
#
# to run the test, explore to the local folder where you have your project and type:
#   - .\node_modules\.bin\cucumber-js
# 
# cucumber will run all feature files that are present in the folder
# cucumber will display all errors in the terminal window.  if you would like the results to show in an html file follow th following 
# create a folder called Test
# inside of Test, create a folder called report
# inside of report, create a file called cucumber_report.js
# once this is done, at the command line of your local project, install cucumber-html-reporter by entering npm install cucumber-html-reporter
# once this is done you can generate html reports of your project.
# to record the results of the project add this command when running your project:
#       -  -f json:test/report/cucumber_report.json
# this puts the report in a json file.
# to view this in HTML you would run the following node command: node index.js
# this will create an html file with all the results



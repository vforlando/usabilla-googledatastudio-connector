[![vforlando](https://circleci.com/gh/vforlando/usabilla-googledatastudio-connector/tree/master.svg?style=svg)](https://circleci.com/gh/vforlando/usabilla-googledatastudio-connector) [![codecov](https://codecov.io/gh/vforlando/usabilla-googledatastudio-connector/branch/master/graph/badge.svg)](https://codecov.io/gh/vforlando/usabilla-googledatastudio-connector)

# Usabilla - Google Data Studio - Connector

## Intro

This project was created to be used as an example of how to use the Usabilla API (https://developer.usabilla.com) to retrieve your feedback data and use it inside the Google Data Studio reporting tool. Please note this project is not part of any official product. Therefore, there is no official support and no guarantee that it works in all scenarios, although any feedback is very welcome.

The code was developed in JavaScript, following some specificities of the Google App scripts (https://www.google.com/script/start). The main point to note is that Google Scripts, by default, does not support modules to be loaded. In this way, this project is not using the Usabilla NodeJS library (https://github.com/usabilla/api-js-node).

This connector does not copy the Usabilla data inside Google. The data is retrieved on demand to generate the reports. In that sense, please pay attention to your API calls limit within Usabilla.

## How to use 

For testing purpose, there is a ready-to-use version of this connector deployed on Google:

https://datastudio.google.com/datasources/create?connectorId=AKfycbwpOn7xZVvGVPswWvs9UUMgWqrLR--y_n01umbYwUMclMSMxz8nFUn_U8n-DVQKu7Fg

Please note that the connector is still an experimental project, and it has not been submitted to be part of the Google Comunity Connectors. Because of that, you will probably receive a security warning from Google (you need to click on accept it) when you try to use this not published connector.  

As a recommended alternative, you can create and deploy your own connector and have full control of the code that is executed:

* Visit Google Apps Script (https://script.google.com/) to create a new project
* Copy the files from the src folder inside your project
* Deploy your connector. Inside the Google Apps Script: click on Publish -> Deploy from manifest 
* You will see a link that you can use to access your connector

(More information about Google Data Studio connector: https://developers.google.com/datastudio/connector)

## Configuration 

To configure the connector, in the first use, it will ask you to enter the Usabilla API Key and API Secret.

## Fields Available

The fields from Usabilla API available on Google Data Studio can be defined on the dataModel.js file. There are 40 fields already configured, including 10 custom fields that can handle custom questions from surveys and feedback forms.

Fields:

* Feedback ID
* Usabilla Feedback Button ID
* Usabilla Button Name
* Feedback Type 
* Campaign Name
* Campaign Analytics ID 
* Date
* Location
* URL
* Feedback Comment
* MoodScore
* NPS
* Custom Questions (1 to 10)
* Custom Answers (1 to 10)
* Custom Variables (1 to 5) 


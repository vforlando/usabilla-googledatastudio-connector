# Usabilla - Google Data Studio Connector

## Intro

This Git repo contains an example on how to use your Usabilla data inside Google Data Studio. This connector uses the Usabilla API (https://developer.usabilla.com) to retrieve the data from Usabilla, and it adapts the data to a format to be used in Google Data Studio. 

Please note this project is not part of an official product, and there is no support and no guarantee that it works in all scenarios. Any feedback is welcome, though.

## How to use 

### Create your connector 

    Visit Google Apps Script (https://script.google.com/) to create a new project. 
    Copy the files inside the src folder inside your project. 
    Make sure to configure your project to use the V8 Javascript runtime. 

    (More information about Google Data Studio connector: https://developers.google.com/datastudio/connector)

### API Info 

    In the first time that use your connector it will ask you to enter the Usabilla API credentials. You should have the API Key and Secret of your Usabilla account. 


## Fields available 

    It is possible to customize the fields from the Usabilla API that you would like to have available in Google Data Studio. In order to do that, please check the dataModel.js file inside the src folder. 
const webdriverio = require('webdriverio');
const options = {desiredCapabilities: {browserName: 'firefox'}};

const browser = webdriverio.remote(options);

const password = "Hello2theWorld";
const specialty = "Medical Resident";
const specificSpecialty = "Dermatology Resident";

"use strict";

browser
    // start the browser
    .init()
    
    // go to Figure1 registration page
    .url('https://app.figure1.com/account/register')

    // wait for username textbox to be ready
    .waitForVisible('.register-page__username-input', 5000) 
    
    // enter random username
    .setValue('.register-page__username-input', Math.random().toString(36).substring(7)) 
    // capture an error
    .catch(function(err){
        console.log(err)
        })

    // enter email address
    .setValue('.register-page__email-input', Math.random().toString(36).substring(7) +'@gmail.com')
    // capture an error
    .catch(function(err){
        console.log(err)
       })

    // enter password
    .setValue('.register-page__password-input',password)
    // capture an error
     .catch(function(err){
         console.log(err)
        })

    // confirm password
    .setValue('.register-page__confirm-password-input',password)
    // capture an error
    .catch(function(err){
        console.log(err)
       }) 
       
    // choose a Specialty
    .addValue('.register-page__specialties-list', specialty )
    // capture an error
    .catch(function(err){
        console.log(err)
       })

    // choose a Specific Specialty
    .addValue('.register-page__specialties-other-list', specificSpecialty )
    // capture an error
    .catch(function(err){
        console.log(err)
       })   

    // click the checkbox
    .click('.register-page__terms-checkbox')
    // capture an error
    .catch(function(err){
        console.log(err)
       }) 
    
    // click the submit button
    .click('register-page__submit-button')
    // capture an error
    .catch(function(err){
        console.log(err)
       })


    //.end();

const { Given, When, Then } = require('cucumber')
const chai = require('chai')
const should = chai.should()

"use strict";

Given('I go to figure1 website', function(callback) {
  this.browser
    .init()
    .url('https://app.figure1.com/account/register').then(function() {
      callback();
    })
})

When('I fill out registration form', function(callback) {
  this.browser
    // wait for the page to load
    .waitForVisible('.register-page__username-input',5000)
    //enter username
    .setValue('.register-page__username-input', this.randomString())
    //enter email
    .setValue('.register-page__email-input', this.randomString() + '@gmail.com')
    //enter password
    .setValue('.register-page__password-input', this.password())
    //confirm password
    .setValue('.register-page__confirm-password-input',this.password())
    //enter specialty
    .addValue('.register-page__specialties-list', this.specialty())
    // enter specific specialty
    .addValue('.register-page__specialties-other-list', this.specific() )
    // check terms of service box
    .click('.register-page__terms-checkbox')
    // click submit button
    .click('.register-page__submit-button').then(function(){
      callback()
     // catch the error 
    }).catch(function(error){
    callback(error);
  })
})

Then('I should see the registration confirmation screen', function(callback){
  this.browser
    // waits for screen to display
    .waitForVisible(".header-home",5000)
    // tests to see if the home button is there
    .isVisible( ".header-home").then(function(result){
      result.should.to.be.true
        callback()
    }).catch(function(error){
      console.log(error)
      callback(error);
    })

})




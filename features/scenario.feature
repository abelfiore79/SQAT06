Feature: figure1 registration
This process os to test if we can register an 
account in figure1.com 

 
  Scenario: Figure1 registration page
    Given I go to figure1 website
    When I fill out registration form
    Then I should see the registration confirmation screen

    

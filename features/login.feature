@wip
Feature: Secure Area log-in Page

    Background: 
        Given I am on the "login" page

    @successfulLogin
    Scenario: As a user, I can log into the secure area
        When I login with tomsmith and SuperSecretPassword!
        Then I should see a flash message saying "You logged into a secure area!"

    @unsuccessfulLogin
    Scenario: As a user, I cannot log into the secure area
        When I login with foobar and barfoo  
        Then I should see a flash message saying "Your username is invalid!"

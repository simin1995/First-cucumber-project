@wip
Feature: Add or remove elements on the page

    @addElements
    Scenario: I click on AddElement button and element is displayed\
      Given I am on the add_remove_elements page
      When I click on AddElement button
      Then element is displayed


    @removeElements
    Scenario: I click on Delete button and element is not displayed
      When I click Delete button
      Then element is not displayed



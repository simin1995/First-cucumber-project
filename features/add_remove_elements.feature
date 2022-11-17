@wip
Feature: Add or remove elements on the page

    Background: 
      Given I am on the "add_remove_elements/" page

    @addElements
    Scenario: I can add and elements
      When I click the add element button 
      Then Delete buttons are displayed

    @removeElements
    Scenario: I can delete elements
      Given Delete buttons exists
      When When I click the delete button
      Then Delete buttons are not displayed



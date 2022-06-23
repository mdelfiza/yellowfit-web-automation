@Logout
Feature: Log out feature
  I want to log out from the application

  @Logout
  Scenario Outline: Log out successfully
    Given I have logged in to the application
    When I click Logout button
    Then I should be redirected to login page

    Examples: 
      |  |
      |  |

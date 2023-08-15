Feature: Auth
    This is feature for logging in and registration

    Scenario: Login
        Given I open landing page
        And I press on Account button
        And I press log in
        And I am on login page
        When I enter login email
        And I enter login password
        And I confirm login
        Then I am logged in

    Scenario: Register a new user
        Given I open landing page
        And I press on Account button
        And I press log in
        And I am on login page
        When I press not yet a customer
        And I enter email address
        And I enter password
        And I enter password repeatedly
        And I select a question about elder sibling
        And I write answer
        And I press register button
        Then I am on login page
        And I enter login email
        And I enter login password
        And I confirm login
        And I am logged in 
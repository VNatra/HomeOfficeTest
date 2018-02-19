Feature: Search Vehicle details

Scenario Outline: Search and Verify vehicle details
    Given I read the vehicle details from "vehicle.csv" file
    And I navigate to DVLA page
    And I select start on DVLA page
    When I enter vehicle Registration "<Number>" number
    And I select continue
    Then I should see the "<Brand>" "<Colour>" of the vehicle
    Examples:
            | Number	   | Brand    | Colour |
            | EF59 OJN     | Nissan   | Black  |
            | FE61 BVX     | VAUXHALL | White  |
            | EX15 ZUC     | AUDI     | White  |
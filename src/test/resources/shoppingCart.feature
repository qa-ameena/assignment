@shoppingCart
Feature: Customer can add to cart and delete the item from the cart

  @add
  Scenario: User can search a product and can add to virtual shopping cart
    Given I am on automationPractice Homepage
    When I search for a product"Dresses"
    And I click on product "Printed Summer Dress"
    And I click on add to cart
    And I click on proceed to checkout
    Then I can view"Shopping-Cart Summary" page header

  @remove
  Scenario: customer can delete the Product from the shopping cart
    Given I am on automationPractice Homepage
    And I search for a product"Dresses"
    And I click on product "Printed Summer Dress"
    And I click on add to cart
    And I click on proceed to checkout
    And I can view"Shopping-Cart Summary" page header
    When I can view "SHOPPING-CART SUMMARY Your shopping cart contains: 1 Product" message
    And I click on "Delete" icon
    Then The Shopping cart is empty



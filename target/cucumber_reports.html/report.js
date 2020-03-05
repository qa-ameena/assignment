$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("shoppingCart.feature");
formatter.feature({
  "line": 2,
  "name": "Customer can add to cart and delete the item from the cart",
  "description": "",
  "id": "customer-can-add-to-cart-and-delete-the-item-from-the-cart",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@shoppingCart"
    }
  ]
});
formatter.before({
  "duration": 48990800800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User can search a product and can add to virtual shopping cart",
  "description": "",
  "id": "customer-can-add-to-cart-and-delete-the-item-from-the-cart;user-can-search-a-product-and-can-add-to-virtual-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@add"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on automationPractice Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I search for a product\"Dresses\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on product \"Printed Summer Dress\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can view\"Shopping-Cart Summary\" page header",
  "keyword": "Then "
});
formatter.match({
  "location": "CartStepDefinition.iAmOnAutomationPracticeHomepage()"
});
formatter.result({
  "duration": 748794900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dresses",
      "offset": 23
    }
  ],
  "location": "CartStepDefinition.iSearchForAProduct(String)"
});
formatter.result({
  "duration": 6841237600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress",
      "offset": 20
    }
  ],
  "location": "CartStepDefinition.iClickOnProduct(String)"
});
formatter.result({
  "duration": 11058006400,
  "status": "passed"
});
formatter.match({
  "location": "CartStepDefinition.iClickOnAddToCart()"
});
formatter.result({
  "duration": 163308300,
  "status": "passed"
});
formatter.match({
  "location": "CartStepDefinition.iClickOnProceedToCheckout()"
});
formatter.result({
  "duration": 8420362100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping-Cart Summary",
      "offset": 11
    }
  ],
  "location": "CartStepDefinition.iCanViewPageHeader(String)"
});
formatter.result({
  "duration": 153607700,
  "status": "passed"
});
formatter.after({
  "duration": 713810800,
  "status": "passed"
});
formatter.before({
  "duration": 47460565200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "customer can delete the Product from the shopping cart",
  "description": "",
  "id": "customer-can-add-to-cart-and-delete-the-item-from-the-cart;customer-can-delete-the-product-from-the-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@remove"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on automationPractice Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I search for a product\"Dresses\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on product \"Printed Summer Dress\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I can view\"Shopping-Cart Summary\" page header",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I can view \"SHOPPING-CART SUMMARY Your shopping cart contains: 1 Product\" message",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on \"Delete\" icon",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "The Shopping cart is empty",
  "keyword": "Then "
});
formatter.match({
  "location": "CartStepDefinition.iAmOnAutomationPracticeHomepage()"
});
formatter.result({
  "duration": 24270300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dresses",
      "offset": 23
    }
  ],
  "location": "CartStepDefinition.iSearchForAProduct(String)"
});
formatter.result({
  "duration": 5287241200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress",
      "offset": 20
    }
  ],
  "location": "CartStepDefinition.iClickOnProduct(String)"
});
formatter.result({
  "duration": 9687262100,
  "status": "passed"
});
formatter.match({
  "location": "CartStepDefinition.iClickOnAddToCart()"
});
formatter.result({
  "duration": 967902300,
  "status": "passed"
});
formatter.match({
  "location": "CartStepDefinition.iClickOnProceedToCheckout()"
});
formatter.result({
  "duration": 7351213300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping-Cart Summary",
      "offset": 11
    }
  ],
  "location": "CartStepDefinition.iCanViewPageHeader(String)"
});
formatter.result({
  "duration": 142146300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SHOPPING-CART SUMMARY Your shopping cart contains: 1 Product",
      "offset": 12
    }
  ],
  "location": "CartStepDefinition.iCanViewMessage(String)"
});
formatter.result({
  "duration": 64284300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delete",
      "offset": 12
    }
  ],
  "location": "CartStepDefinition.iClickOnIcon(String)"
});
formatter.result({
  "duration": 124532600,
  "status": "passed"
});
formatter.match({
  "location": "CartStepDefinition.theShoppingCartIsEmpty()"
});
formatter.result({
  "duration": 5164929300,
  "status": "passed"
});
formatter.after({
  "duration": 737851200,
  "status": "passed"
});
});
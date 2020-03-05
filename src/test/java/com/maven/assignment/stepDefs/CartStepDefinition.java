package com.maven.assignment.stepDefs;

import com.maven.assignment.pageobjects.HomePage;
import com.maven.assignment.pageobjects.ResultsPage;
import com.maven.assignment.pageobjects.SearchPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.hamcrest.Matchers;

import static org.hamcrest.MatcherAssert.assertThat;

public class CartStepDefinition {


    @Given("^I am on automationPractice Homepage$")
    public void iAmOnAutomationPracticeHomepage() {

        assertThat("Homepage Url might end with something or user on different page",
                new HomePage().homePageAssertion(), Matchers.endsWith("http://automationpractice.com/index.php"));
    }

    @When("^I search for a product\"([^\"]*)\"$")
    public void iSearchForAProduct(String productName) {
        new SearchPage().enterProductName(productName);
    }


    @And("^I click on product \"([^\"]*)\"$")
    public void iClickOnProduct(String product) {
        new SearchPage().selectProduct(product);
    }

    @And("^I click on add to cart$")
    public void iClickOnAddToCart() {
        new SearchPage().cart();
    }

    @And("^I click on proceed to checkout$")
    public void iClickOnProceedToCheckout() {
        new SearchPage().clickCheckOutButton();
    }

    @And("^I can view\"([^\"]*)\" page header$")
    public void iCanViewPageHeader(String arg0) {

        assertThat("Summary Page doesn't match",
                new ResultsPage().setSummaryPageCartTitle(), Matchers.containsString("Your shopping cart"));

    }

    @Then("^I can view \"([^\"]*)\" message$")
    public void iCanViewMessage(String shoppingSummary) {
        assertThat("Shopping Cart Summary Message doesn't Match", new ResultsPage().cartQuantitySummaryMessage(),
                Matchers.equalToIgnoringWhiteSpace(shoppingSummary));
    }

    @And("^I click on \"([^\"]*)\" icon$")
    public void iClickOnIcon(String arg0) {
        new ResultsPage().setDeleteItemFromCart();
    }

    @Then("^The Shopping cart is empty$")
    public void theShoppingCartIsEmpty() {
        assertThat("Shopping Cart doesnt contain any items",
                new ResultsPage().emptyCartMessage(),
                Matchers.equalToIgnoringWhiteSpace("Your shopping cart is empty."));
    }
}


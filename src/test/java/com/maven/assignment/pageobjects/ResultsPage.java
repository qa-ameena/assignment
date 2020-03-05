package com.maven.assignment.pageobjects;

import com.maven.assignment.configurations.DriverFactory;
import com.maven.assignment.utilis.Helpers;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

/**
 * <p>
 * home page < search page objects < results page objects
 * </p>
 */
public class ResultsPage extends DriverFactory {

    @FindBy(xpath = "//span[@class='navigation_page']")
    private WebElement summaryPageCartTitle;

    @FindBy(css = "#summary_products_quantity")
    private WebElement summaryOfTheCart;

    @FindBy(css = "#cart_title")
    private WebElement cartQuantityConfirmationMessage;

    @FindBy(css = ".cart_quantity_delete")
    private WebElement deleteIcon;

    @FindBy(css = "div[id='center_column'] p")
    private WebElement emptyCart;

    /**
     * Returns the cart summary page-title
     *
     * @return
     */
    public String setSummaryPageCartTitle() {//for assertion
        return summaryPageCartTitle.getText();
    }

    /**
     * Asserts the cart quantity summary
     */
    public void quantityCheckInTheCart() {

        summaryOfTheCart.getText().equalsIgnoreCase("summary_products_quantity");
    }


    /**
     * Returns cart summary
     *
     * @return
     */
    public String cartQuantitySummaryMessage() {
        return cartQuantityConfirmationMessage.getText().replace("SHOPPING-CART SUMMARY Your shopping cart contains:", "");
    }


    /**
     * Clicks delete icon
     */
    public void setDeleteItemFromCart() {
        deleteIcon.click();
    }

    /**
     * Returns the empty card message
     *
     * @return
     */
    public String emptyCartMessage() {

        Helpers.waitForElementToDisplayed(emptyCart);

        return emptyCart.getText();
    }

}

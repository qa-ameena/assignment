package com.maven.assignment.pageobjects;

import com.maven.assignment.configurations.DriverFactory;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

/**
 * <p>
 * home page < search page objects
 * </p>
 */
public class SearchPage extends DriverFactory {

    @FindBy(css = "#search_query_top")
    private WebElement searchBox;

    @FindBy(css = ".button-search")
    private WebElement magnifierButton;

    @FindBy(css = ".product-name")
    private List<WebElement> productList;

    @FindBy(css = "#add_to_cart")
    private WebElement addToCartButton;

    @FindBy(linkText = "Proceed to checkout")
    private WebElement proccedToCheckOutButton;


    /**
     * Enters the search item
     *
     * @param productName
     */
    public void enterProductName(String productName) {
        searchBox.sendKeys(productName);
        magnifierButton.click();
    }

    /**
     * Clicks the given product from results list
     *
     * @param product
     */
    public void selectProduct(String product) {
        for (WebElement productName : productList) {
            if
            (productName.getText().equalsIgnoreCase(product)) {
                productName.click();
                break;
            }
        }
    }

    /**
     * Clicks add to cart button
     */
    public void cart() {
        addToCartButton.click();
    }

    /**
     * Clicks checkout button
     */
    public void clickCheckOutButton() {
        proccedToCheckOutButton.click();
    }

}

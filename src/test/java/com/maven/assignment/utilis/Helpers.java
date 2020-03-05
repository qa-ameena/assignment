package com.maven.assignment.utilis;


import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Helpers extends com.maven.assignment.configurations.DriverFactory {

    public void actionsMethod(WebElement item) {
        Actions actions = new Actions(driver);
        actions.moveToElement(item).build().perform();
    }

    public void JavaScriptExec() {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,300)");

    }

    public static void waitForElementToDisplayed(WebElement element) {
        WebDriverWait wait = new WebDriverWait(driver, 3000);
        wait.until(ExpectedConditions.visibilityOf(element));
    }
}

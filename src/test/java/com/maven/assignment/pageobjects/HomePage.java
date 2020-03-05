package com.maven.assignment.pageobjects;

import com.maven.assignment.configurations.DriverFactory;

/**
 * <p>
 * Home page Page objects
 * </p>
 */
public class HomePage extends DriverFactory {
    /**
     * Returns the current URL
     *
     * @return
     */
    public String homePageAssertion() {
        return driver.getCurrentUrl();
    }
}

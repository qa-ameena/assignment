package com.maven.assignment.configurations;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.PageFactory;


import java.util.concurrent.TimeUnit;

public class DriverFactory {

    public static WebDriver driver;

    public DriverFactory() {
        PageFactory.initElements(driver, this);
    }

    public void setUpBrowser(String browser) {
        switch (browser) {
            case "firefox":
                WebDriverManager.firefoxdriver().setup();
                driver = new FirefoxDriver();
                break;
            case "chrome":
                WebDriverManager.chromedriver().setup();
                driver = new ChromeDriver();
                break;
            default:
                driver = new InternetExplorerDriver();
                break;
        }
    }

    public void setUpUrl(String url) {
        driver.get(url);
    }

    public void maximiseWindow() {
        driver.manage().window().maximize();
    }

    public void timeOuts() {
        driver.manage().timeouts().implicitlyWait(3000, TimeUnit.SECONDS);
    }

    public void deleteCookies() {
        driver.manage().deleteAllCookies();
    }

    public void closeBrowser() {
        driver.close();
    }
}


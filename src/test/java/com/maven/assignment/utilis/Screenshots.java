package com.maven.assignment.utilis;

import cucumber.api.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.io.FileHandler;

import java.io.File;
import java.io.IOException;

public class Screenshots extends com.maven.assignment.configurations.DriverFactory {
    public static void getScreenShots(String capture) {
        TakesScreenshot takesScreenshot = (TakesScreenshot) driver;
        File capImg = takesScreenshot.getScreenshotAs(OutputType.FILE);
        try {
            FileHandler.copy(capImg, new File("src/test/java/Screenshots/" + capture + ".png"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /***
     * This method takes screenshots and appends to the cucumber reports
     * @ Scenario
     */
    public static void embedPhoto(Scenario scenario) {
        TakesScreenshot takeShots = (TakesScreenshot) driver;
        byte[] image = takeShots.getScreenshotAs(OutputType.BYTES);
        scenario.embed(image, "images/png");
    }
}

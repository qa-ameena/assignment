package com.maven.assignment.configurations;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends com.maven.assignment.configurations.DriverFactory {

 com.maven.assignment.configurations.DriverFactory driverFactory = new com.maven.assignment.configurations.DriverFactory();

 @Before
 public void setUp() {
  driverFactory.setUpBrowser("chrome");
  driverFactory.setUpUrl("http://automationpractice.com/index.php");
  driverFactory.maximiseWindow();
  driverFactory.timeOuts();
  driverFactory.deleteCookies();
 }

 @After
 public void tearDown() {
  driverFactory.closeBrowser();
 }
}
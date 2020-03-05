package com.maven.assignment;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/resources"}, tags = {"@shoppingCart"},
        plugin = {"json:target/cucumber_reports/jsonfile.json",
                "html:target/cucumber_reports.html"})
public class TestRunner {

}

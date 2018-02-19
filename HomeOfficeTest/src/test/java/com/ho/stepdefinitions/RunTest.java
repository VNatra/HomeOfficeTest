package com.ho.stepdefinitions;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:features/vehiclesearch.feature",
		plugin = {"pretty", "html:target/cucumber-html-report"}
		)
public class RunTest{

}
	
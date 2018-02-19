package com.ho.stepdefinitions;

import static org.hamcrest.MatcherAssert.assertThat;
import org.openqa.selenium.WebDriver;
import com.ho.pages.vechicleInfoPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class vechicleinfoSteps{
	
	vechicleInfoPage vechInfo;
	public WebDriver driver;
	
	public vechicleinfoSteps()
	{
		driver = BaseClass.driver;
		vechInfo = new vechicleInfoPage(driver);
	}

    @Given("^I read the vehicle details from \"([^\"]*)\" file$")
    public void read_registration_number_from_file(String fileName) throws Throwable {
    	vechInfo.getRegumbers(fileName);
    }

    @And("^I navigate to DVLA page$")
    public void i_am_on_DVLA_search_page(){
    	vechInfo.getHomeURL();
    }
    
    @And("^I select start on DVLA page$")
    public void i_click_on_button(){
    	vechInfo.clickOnStartNow();
    }
    
    @When("^I enter vehicle Registration \"([^\"]*)\" number$")
    public void i_enter_registration_number(String regnumber) throws Throwable {
    	vechInfo.enterRegNumber(regnumber);
    }

    @And("^I select continue$")
    public void i_click_on_continue_button(){
    	vechInfo.clikOnContinueButton();
    }
    
    @Then("^I should see the \"([^\"]*)\" \"([^\"]*)\" of the vehicle$")
    public void verify_vehicleBrandAndColor(String exceptedBrand, String expectedColor){
        assertThat("Vehicle's Brand is not matching",exceptedBrand.equalsIgnoreCase(vechInfo.getVechicleBrand()));
        assertThat("Vehicle's Colour is not matching",expectedColor.equalsIgnoreCase(vechInfo.getVechicleColor()));
    }

}

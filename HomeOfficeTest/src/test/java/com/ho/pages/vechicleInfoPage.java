package com.ho.pages;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import com.ho.stepdefinitions.ReadExcelSheet;
import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

public class vechicleInfoPage {

	public WebDriver driver;
    List<String> vehicleRegNumbers = new ArrayList<>();

    @FindBy(id="Vrm")
    private WebElement inputBox;

    @FindBy(name="Continue")
    private WebElement continueButton;
    
    @FindBy(id = "get-started")
    private WebElement startNowButton;
    
    @FindBy(css=".list-summary-item span strong")
    private List<WebElement> results;
    
    public vechicleInfoPage(WebDriver driver)
	{
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
   
    public void getHomeURL() {
        driver.get("https://www.gov.uk/get-vehicle-information-from-dvla#more-information");
    }

    public void clickOnStartNow() {
        startNowButton.findElement(By.tagName("a")).click();
    }
    
    public void enterRegNumber(String VehicleNumber){
        inputBox.sendKeys(VehicleNumber);
    }
    

    public void clikOnContinueButton() {
        continueButton.click();
    }
    
    public List<String> getRegumbers(String fileName) throws Throwable, IOException, URISyntaxException {
        File[] files = ReadExcelSheet.readDirectory();

        for(File file: files){
            if(file.getName().equalsIgnoreCase(fileName)){
                vehicleRegNumbers =ReadExcelSheet.readCsvFile(file.getName(),"VehicleNumber");
            }
        }
        return vehicleRegNumbers;
    }
    
    public String getVechicleBrand(){
        return results.get(0).getText();
    }


    public String getVechicleColor(){
        return results.get(1).getText();
    }




}


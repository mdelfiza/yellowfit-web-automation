import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When



class Logout {

	@When("I landed in My Account page")
	def I_landed_in_My_Account_page() {
		//WebUI.callTestCase(findTestCase("Test Cases/Common/My Account - My Account page is loaded successfully"), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.verifyMatch(WebUI.getUrl(), GlobalVariable.url+'myaccount', false)
		WebUI.verifyTextPresent('My Account', false)
	}

	@When("I click Logout button")
	def I_click_logout_button() {
		//WebUI.callTestCase(findTestCase("Test Cases/Common/My Account - Click Logout"), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.click(findTestObject('My Account/btn_logout'))
	}

	@Then("I should be redirected to login page")
	def I_should_be_redirected_to_login_page() {
		//WebUI.callTestCase(findTestCase("Test Cases/Common/Login - Login page is loaded successfully"), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.verifyMatch(WebUI.getUrl(), GlobalVariable.url+'login', false)
		WebUI.verifyTextPresent("USER LOGIN", false)
	}
}
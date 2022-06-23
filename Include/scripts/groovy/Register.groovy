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



class Register {

	@And("I click Create Account button")
	def I_click_create_account_button() {
		//WebUI.callTestCase(findTestCase("Test Cases/Common/Login - Click Create Account"), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.click(findTestObject('Object Repository/Login/btn_create_account'))
	}

	@And("I input firstname (.*), lastname (.*), date (.*), month (.*), year (.*), phone (.*), email (.*), and password(.*)")
	def I_verify_the_status_in_step(String firstname, String lastname, String date, String month, String year, String phone, String email, String password) {
//		WebUI.callTestCase(findTestCase("Test Cases/Common/Register - Fill registration form"),
//				[('firstname') : firstname, ('lastname') : lastname, ('date') : date, ('month') : month, ('year') : year, ('phone') : phone, ('email') : email, ('password') : password],
//				FailureHandling.STOP_ON_FAILURE)
		WebUI.setText(findTestObject('Object Repository/Register/input_first_name'), firstname)
		WebUI.setText(findTestObject('Object Repository/Register/input_last_name'), lastname)
		WebUI.selectOptionByValue(findTestObject('Object Repository/Register/dd_day'), date, true)
		WebUI.selectOptionByValue(findTestObject('Object Repository/Register/dd_month'), month, true)
		WebUI.selectOptionByValue(findTestObject('Object Repository/Register/dd_year'), year, true)
		WebUI.setText(findTestObject('Object Repository/Register/input_phone_whatsapp'), phone)
		WebUI.setText(findTestObject('Object Repository/Register/input_email'), email)
		WebUI.setEncryptedText(findTestObject('Object Repository/Register/input_password'), password)
	}

	@And("I click Register button")
	def I_click_register_button(){
		//WebUI.callTestCase(findTestCase("Test Cases/Common/Register - Click Register"), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.click(findTestObject('Register/btn_register'))
		WebUI.waitForPageLoad(30)
	}

	@Then("I should be redirected to Login page")
	def I_should_be_redirected_to_Login_page() {
		//WebUI.callTestCase(findTestCase("Test Cases/Common/Login - Login page is loaded successfully"), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.verifyMatch(WebUI.getUrl(), GlobalVariable.url+'login', false)
		WebUI.verifyTextPresent("USER LOGIN", false)
	}

	@Then("I should see error 'First Name tidak boleh kosong!'")
	def Error_First_Name_tidak_boleh_kosong() {
		//WebUI.callTestCase(findTestCase("Test Cases/Common/Register - Verify error empty firstname"), [:], FailureHandling.STOP_ON_FAILURE)
		CustomKeywords.'customKeyword.verifyErrorMessage'("Failed", "First Name tidak boleh kosong!")
	}

	@Then("I should see error 'Last Name tidak boleh kosong!'")
	def Error_Last_Name_tidak_boleh_kosong() {
		//WebUI.callTestCase(findTestCase("Test Cases/Common/Register - Verify error empty lastname"), [:], FailureHandling.STOP_ON_FAILURE)
		CustomKeywords.'customKeyword.verifyErrorMessage'("Failed", "Last Name tidak boleh kosong!")
	}

	@Then("I should see error 'Phone tidak boleh kosong!'")
	def Error_Phone_tidak_boleh_kosong() {
		//WebUI.callTestCase(findTestCase("Test Cases/Common/Register - Verify error empty phone"), [:], FailureHandling.STOP_ON_FAILURE)
		CustomKeywords.'customKeyword.verifyErrorMessage'("Failed", "Phone tidak boleh kosong!")
	}

	@Then("I should see error 'password tidak boleh kosong!'")
	def Error_password_tidak_boleh_kosong() {
		//WebUI.callTestCase(findTestCase("Test Cases/Common/Register - Verify error empty password"), [:], FailureHandling.STOP_ON_FAILURE)
		CustomKeywords.'customKeyword.verifyErrorMessage'("Failed", "password tidak boleh kosong!")
	}

	@Then("I should see error 'Email already registered!'")
	def Error_email_already_registered() {
		//WebUI.callTestCase(findTestCase("Test Cases/Common/Register - Verify error email already registered"), [:], FailureHandling.STOP_ON_FAILURE)
		CustomKeywords.'customKeyword.verifyErrorMessage'("Failed", "Email already registered!")
	}

	@Then("I should see error 'Password harus 4-15 Digit hanya berisi karakter, angka numerik, garis bawah!'")
	def Error_invalid_password() {
		//WebUI.callTestCase(findTestCase("Test Cases/Common/Register - Verify error invalid password"), [:], FailureHandling.STOP_ON_FAILURE)
		CustomKeywords.'customKeyword.verifyErrorMessage'("Failed", "Password harus 4-15 Digit hanya berisi karakter, angka numerik, garis bawah!")
	}
}
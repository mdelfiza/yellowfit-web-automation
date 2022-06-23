

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



class login {

	@When("I click Account button")
	def I_click_Account_button() {
		//WebUI.callTestCase(findTestCase("Test Cases/Common/Home - Click Account"), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.click(findTestObject('Object Repository/Home/link_account'))
	}

	@And("I enter email(.*) and password(.*)")
	def I_enter_email_and_password(String email, String password) {
		//WebUI.callTestCase(findTestCase("Test Cases/Common/Login - Input email"), [('email') : email], FailureHandling.STOP_ON_FAILURE)
		//WebUI.callTestCase(findTestCase("Test Cases/Common/Login - Input password"), [('password') : password], FailureHandling.STOP_ON_FAILURE)
		WebUI.setText(findTestObject('Login/input_email'), email)
		WebUI.setEncryptedText(findTestObject('Login/input_password'), password)
	}

	@And("I click Login button")
	def I_click_Login_button() {
		//WebUI.callTestCase(findTestCase("Test Cases/Common/Login - Click Login"), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.click(findTestObject('Login/btn_login'))
		WebUI.waitForPageLoad(30)
	}

	@Then("I should be able to login successfully")
	def I_should_be_able_to_login_successfully() {
		//WebUI.callTestCase(findTestCase("Test Cases/Common/My Account - My Account page is loaded successfully"), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.verifyMatch(WebUI.getUrl(), GlobalVariable.url+'myaccount', false)
		WebUI.verifyTextPresent('My Account', false)
	}

	@Then("I should see error 'masukan email yang benar!'")
	def Error_masukan_email_yang_benar() {
		//WebUI.callTestCase(findTestCase("Test Cases/Common/Login - Verify error invalid email format"), [:], FailureHandling.STOP_ON_FAILURE)
		CustomKeywords.'customKeyword.verifyErrorMessage'("Failed", "masukan email yang benar!")
	}

	@Then("I should see error 'email anda belum terdaftar'")
	def Error_email_belum_terdaftar() {
		//WebUI.callTestCase(findTestCase("Test Cases/Common/Login - Verify error unregistered email"), [:], FailureHandling.STOP_ON_FAILURE)
		CustomKeywords.'customKeyword.verifyErrorMessage'("Unknown", "email anda belum terdaftar, silakan lakukan registrasi!")
	}

	@Then("I should see error 'email tidak boleh kosong!'")
	def Error_email_tidak_boleh_kosong() {
		//WebUI.callTestCase(findTestCase("Test Cases/Common/Login - Verify error empty email"), [:], FailureHandling.STOP_ON_FAILURE)
		CustomKeywords.'customKeyword.verifyErrorMessage'("Failed", "email tidak boleh kosong!")
	}

	@Then("I should see error 'password yang anda masukkan salah!'")
	def Error_password_salah() {
		//WebUI.callTestCase(findTestCase("Test Cases/Common/Login - Verify error incorrect password"), [:], FailureHandling.STOP_ON_FAILURE)
		CustomKeywords.'customKeyword.verifyErrorMessage'("Wrong Password", "password yang anda masukkan salah!")
	}

	@Then("I should see error 'Password tidak boleh kosong!'")
	def Error_password_tidak_boleh_kosong() {
		//WebUI.callTestCase(findTestCase("Test Cases/Common/Login - Verify error empty password"), [:], FailureHandling.STOP_ON_FAILURE)
		CustomKeywords.'customKeyword.verifyErrorMessage'("Failed", "Password tidak boleh kosong!")
	}
}
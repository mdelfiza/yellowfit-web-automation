import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

//WebUI.callTestCase(findTestCase('Test Cases/Home/Home - click Account'), null)

WebUI.openBrowser('')

WebUI.navigateToUrl(GlobalVariable.url+'login')

WebUI.verifyElementPresent(findTestObject('Home/img_yellowfit'), 0)

WebUI.verifyElementPresent(findTestObject('Home/link_home'), 0)

WebUI.verifyElementPresent(findTestObject('Home/link_about'), 0)

WebUI.verifyElementPresent(findTestObject('Home/link_contact'), 0)

WebUI.verifyElementPresent(findTestObject('Home/link_pricelist'), 0)

WebUI.verifyElementPresent(findTestObject('Home/link_faq'), 0)

WebUI.verifyElementPresent(findTestObject('Home/link_article'), 0)

WebUI.verifyElementPresent(findTestObject('Home/link_testimoni'), 0)

WebUI.verifyElementPresent(findTestObject('Home/link_account'), 0)

WebUI.verifyElementPresent(findTestObject('Home/btn_order_now'), 0)

WebUI.verifyElementPresent(findTestObject('Login/label_signin'), 0)

WebUI.verifyElementPresent(findTestObject('Login/img_account'), 0)

WebUI.verifyElementPresent(findTestObject('Login/label_user_login'), 0)

WebUI.verifyElementPresent(findTestObject('Login/label_email'), 0)

WebUI.verifyElementPresent(findTestObject('Login/input_email'), 0)

WebUI.verifyElementPresent(findTestObject('Login/label_password'), 0)

WebUI.verifyElementPresent(findTestObject('Login/input_password'), 0)

WebUI.verifyElementPresent(findTestObject('Login/btn_login'), 0)

WebUI.verifyElementPresent(findTestObject('Login/btn_create_account'), 0)

WebUI.verifyElementPresent(findTestObject('Login/txt_forgot_password'), 0)

WebUI.verifyElementPresent(findTestObject('Home/img_whatsapp'), 0)

WebUI.verifyElementPresent(findTestObject('Home/img_line'), 0)

WebUI.verifyElementPresent(findTestObject('Home/img_instagram'), 0)

WebUI.verifyElementPresent(findTestObject('Home/img_email'), 0)

WebUI.verifyElementPresent(findTestObject('Login/txt_footer'), 0)

WebUI.closeBrowser()


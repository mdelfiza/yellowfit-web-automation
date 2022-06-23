$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/meitridelfiza/git/yellowfit-web-automation/Include/features/Register.feature");
formatter.feature({
  "name": "Register feature",
  "description": "  I want to register to YellowFit application",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Register"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Register with invalid email format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Invalid_email_format"
    }
  ]
});
formatter.step({
  "name": "I navigate to YellowFit application",
  "keyword": "Given "
});
formatter.step({
  "name": "I click Account button",
  "keyword": "When "
});
formatter.step({
  "name": "I click Create Account button",
  "keyword": "And "
});
formatter.step({
  "name": "I input firstname \u003cfirstname\u003e, lastname \u003clastname\u003e, date \u003cdate\u003e, month \u003cmonth\u003e, year \u003cyear\u003e, phone \u003cphone\u003e, email \u003cemail\u003e, and password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click Register button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see error \u0027masukan email yang benar!\u0027",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "date",
        "month",
        "year",
        "phone",
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "Hazel",
        "Grace",
        "10",
        "10",
        "2000",
        "08112233440011",
        "ab12",
        "HwXnxaZD17M\u003d"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Register with invalid email format",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@Invalid_email_format"
    }
  ]
});
formatter.step({
  "name": "I navigate to YellowFit application",
  "keyword": "Given "
});
formatter.match({
  "location": "Common.I_navigate_to_YellowFit_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Account button",
  "keyword": "When "
});
formatter.match({
  "location": "login.I_click_Account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Create Account button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.I_click_create_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input firstname Hazel, lastname Grace, date 10, month 10, year 2000, phone 08112233440011, email ab12, and password HwXnxaZD17M\u003d",
  "keyword": "And "
});
formatter.match({
  "location": "Register.I_verify_the_status_in_step(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Register button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.I_click_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see error \u0027masukan email yang benar!\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "login.Error_masukan_email_yang_benar()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Call Test Case \u0027Test Cases/Common/Login - Verify error invalid email format\u0027 failed\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:63)\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\n\tat login.Error_masukan_email_yang_benar(login.groovy:73)\n\tat ✽.I should see error \u0027masukan email yang benar!\u0027(/Users/meitridelfiza/git/yellowfit-web-automation/Include/features/Register.feature:77)\nCaused by: com.kms.katalon.core.exception.StepFailedException: Unable to verify text \u0027Failed\u0027 is present \n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyTextPresentKeyword.verifyTextPresent(VerifyTextPresentKeyword.groovy:83)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyTextPresentKeyword.execute(VerifyTextPresentKeyword.groovy:68)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyTextPresent(WebUiBuiltInKeywords.groovy:1723)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyTextPresent$9.call(Unknown Source)\n\tat customKeyword.verifyErrorMessage(customKeyword.groovy:44)\n\tat customKeyword.invokeMethod(customKeyword.groovy)\n\tat com.kms.katalon.core.main.CustomKeywordDelegatingMetaClass.invokeStaticMethod(CustomKeywordDelegatingMetaClass.java:50)\n\tat Login - Verify error invalid email format.run(Login - Verify error invalid email format:21)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:442)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:433)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:412)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:404)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:281)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:142)\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:59)\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\n\tat login.Error_masukan_email_yang_benar(login.groovy:73)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\n\tat cucumber.runner.TestStep.run(TestStep.java:47)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\n\tat cucumber.api.cli.Main.run(Main.java:35)\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFileWithTags_closure2.doCall(CucumberBuiltinKeywords.groovy:204)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFileWithTags_closure2.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFileWithTags(CucumberBuiltinKeywords.groovy:164)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFileWithTags.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFileWithTags(CucumberBuiltinKeywords.groovy:287)\n\tat Neg - Register with invalid email format.run(Neg - Register with invalid email format:3)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:442)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:433)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:412)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:404)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:281)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestCaseMainPhase(TestSuiteExecutor.java:202)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:164)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:105)\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\n\tat TempTestSuite1653444836160.run(TempTestSuite1653444836160.groovy:36)\nCaused by: com.kms.katalon.core.exception.StepFailedException: Text \u0027Failed\u0027 is not present on page \n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyTextPresentKeyword$_verifyTextPresent_closure1.doCall(VerifyTextPresentKeyword.groovy:79)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyTextPresentKeyword$_verifyTextPresent_closure1.call(VerifyTextPresentKeyword.groovy)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\n\t... 61 more\n",
  "status": "failed"
});
});
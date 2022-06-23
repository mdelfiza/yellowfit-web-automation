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
  "name": "Register with valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Valid_data"
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
  "name": "I should be redirected to Login page",
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
        "delf_test15@gmail.com",
        "HwXnxaZD17M\u003d"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Register with valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@Valid_data"
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
  "name": "I input firstname Hazel, lastname Grace, date 10, month 10, year 2000, phone 08112233440011, email delf_test15@gmail.com, and password HwXnxaZD17M\u003d",
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
  "name": "I should be redirected to Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.I_should_be_redirected_to_Login_page()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Call Test Case \u0027Test Cases/Common/Login - Login page is loaded successfully\u0027 failed\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:63)\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\n\tat Register.I_should_be_redirected_to_Login_page(Register.groovy:67)\n\tat ✽.I should be redirected to Login page(/Users/meitridelfiza/git/yellowfit-web-automation/Include/features/Register.feature:12)\nCaused by: com.kms.katalon.core.exception.StepFailedException: Actual text \u0027https://yellowfitkitchen.com/register\u0027 and expected text \u0027https://yellowfitkitchen.com/login\u0027 are not matched\n\tat com.kms.katalon.core.keyword.builtin.VerifyMatchKeyword$_verifyMatch_closure1.doCall(VerifyMatchKeyword.groovy:57)\n\tat com.kms.katalon.core.keyword.builtin.VerifyMatchKeyword$_verifyMatch_closure1.call(VerifyMatchKeyword.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\n\tat com.kms.katalon.core.keyword.builtin.VerifyMatchKeyword.verifyMatch(VerifyMatchKeyword.groovy:60)\n\tat com.kms.katalon.core.keyword.builtin.VerifyMatchKeyword.execute(VerifyMatchKeyword.groovy:45)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.verifyMatch(BuiltinKeywords.groovy:73)\n\tat Login - Login page is loaded successfully.run(Login - Login page is loaded successfully:20)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:442)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:433)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:412)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:404)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:281)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:142)\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:59)\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\n\tat Register.I_should_be_redirected_to_Login_page(Register.groovy:67)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\n\tat cucumber.runner.TestStep.run(TestStep.java:47)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.Runtime.runFeature(Runtime.java:120)\n\tat cucumber.runtime.Runtime.run(Runtime.java:106)\n\tat cucumber.api.cli.Main.run(Main.java:35)\n\tat cucumber.api.cli.Main$run.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFileWithTags_closure2.doCall(CucumberBuiltinKeywords.groovy:204)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runFeatureFileWithTags_closure2.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFileWithTags(CucumberBuiltinKeywords.groovy:164)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runFeatureFileWithTags.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runFeatureFileWithTags(CucumberBuiltinKeywords.groovy:287)\n\tat Register with valid data.run(Register with valid data:3)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:442)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:433)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:412)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:404)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:281)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestCaseMainPhase(TestSuiteExecutor.java:202)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:164)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:105)\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\n\tat TempTestSuite1653447952736.run(TempTestSuite1653447952736.groovy:36)\n",
  "status": "failed"
});
});
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
        "delf_test11@gmail.com",
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
  "name": "I input firstname Hazel, lastname Grace, date 10, month 10, year 2000, phone 08112233440011, email delf_test11@gmail.com, and password HwXnxaZD17M\u003d",
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
  "status": "passed"
});
});
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
  "name": "Register with empty firstname",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Empty_firstname"
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
  "name": "I should see error \u0027First Name tidak boleh kosong!\u0027",
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
        "",
        "Grace",
        "10",
        "10",
        "2000",
        "08112233440011",
        "delf_test2@gmail.com",
        "HwXnxaZD17M\u003d"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Register with empty firstname",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@Empty_firstname"
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

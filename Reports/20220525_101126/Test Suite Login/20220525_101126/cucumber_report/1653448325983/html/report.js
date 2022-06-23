$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/meitridelfiza/git/yellowfit-web-automation/Include/features/Login.feature");
formatter.feature({
  "name": "Login feature",
  "description": "  I want to login to the YellowFit application",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Login with unregistered email",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Unregistered_email"
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
  "name": "I enter email \u003cemail\u003e and password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click Login button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see error \u0027email anda belum terdaftar\u0027",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "meitri.delfiza@icehousecorp.com",
        "pGIjovFIKpdMBmQKKTji5A\u003d\u003d"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with unregistered email",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Unregistered_email"
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
  "name": "I enter email meitri.delfiza@icehousecorp.com and password pGIjovFIKpdMBmQKKTji5A\u003d\u003d",
  "keyword": "And "
});
formatter.match({
  "location": "login.I_enter_email_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Login button",
  "keyword": "And "
});
formatter.match({
  "location": "login.I_click_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see error \u0027email anda belum terdaftar\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "login.Error_email_belum_terdaftar()"
});
formatter.result({
  "status": "passed"
});
});
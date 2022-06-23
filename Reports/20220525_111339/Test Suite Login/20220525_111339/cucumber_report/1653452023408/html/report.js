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
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Valid_credentials"
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
  "name": "I should be able to login successfully",
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
        "mdelfiza@gmail.com",
        "pGIjovFIKpdMBmQKKTji5A\u003d\u003d"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Valid_credentials"
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

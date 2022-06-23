@Login
Feature: Login feature
  I want to login to the YellowFit application

  @Valid_credentials
  Scenario Outline: Login with valid credentials
    Given I navigate to YellowFit application
    When I click Account button
    And I enter email <email> and password <password>
    And I click Login button
    Then I should be able to login successfully

    Examples: 
      | email              | password                 |
      | mdelfiza@gmail.com | pGIjovFIKpdMBmQKKTji5A== |

  @Invalid_email_format
  Scenario Outline: Login with invalid email format
    Given I navigate to YellowFit application
    When I click Account button
    And I enter email <email> and password <password>
    And I click Login button
    Then I should see error 'masukan email yang benar!'

    Examples: 
      | email | password                 |
      | a1%@  | pGIjovFIKpdMBmQKKTji5A== |

  @Unregistered_email
  Scenario Outline: Login with unregistered email
    Given I navigate to YellowFit application
    When I click Account button
    And I enter email <email> and password <password>
    And I click Login button
    Then I should see error 'email anda belum terdaftar'

    Examples: 
      | email                           | password                 |
      | meitri.delfiza@icehousecorp.com | pGIjovFIKpdMBmQKKTji5A== |

  @Empty_email
  Scenario Outline: Login with empty email
    Given I navigate to YellowFit application
    When I click Account button
    And I enter email <email> and password <password>
    And I click Login button
    Then I should see error 'email tidak boleh kosong!'

    Examples: 
      | email | password                 |
      |       | pGIjovFIKpdMBmQKKTji5A== |

  @Incorrect_password
  Scenario Outline: Login with valid email and incorrect password
    Given I navigate to YellowFit application
    When I click Account button
    And I enter email <email> and password <password>
    And I click Login button
    Then I should see error 'password yang anda masukkan salah!'

    Examples: 
      | email              | password                 |
      | mdelfiza@gmail.com | NaRTu7UBtmr+q7eG3gEDOw== |

  @Empty_password
  Scenario Outline: Login with valid email and empty password
    Given I navigate to YellowFit application
    When I click Account button
    And I enter email <email> and password <password>
    And I click Login button
    Then I should see error 'Password tidak boleh kosong!'

    Examples: 
      | email              | password |
      | mdelfiza@gmail.com |          |

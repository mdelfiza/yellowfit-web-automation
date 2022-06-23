@Register
Feature: Register feature
  I want to register to YellowFit application

  @Valid_data
  Scenario Outline: Register with valid data
    Given I navigate to YellowFit application
    When I click Account button
    And I click Create Account button
    And I input firstname <firstname>, lastname <lastname>, date <date>, month <month>, year <year>, phone <phone>, email <email>, and password <password>
    And I click Register button
    Then I should be redirected to Login page

    Examples: 
      | firstname | lastname | date | month | year | phone          | email                 | password     |
      | Hazel     | Grace    |   10 |    10 | 2000 | 08112233440011 | delf_test20@gmail.com | HwXnxaZD17M= |

  @Empty_firstname
  Scenario Outline: Register with empty firstname
    Given I navigate to YellowFit application
    When I click Account button
    And I click Create Account button
    And I input firstname <firstname>, lastname <lastname>, date <date>, month <month>, year <year>, phone <phone>, email <email>, and password <password>
    And I click Register button
    Then I should see error 'First Name tidak boleh kosong!'

    Examples: 
      | firstname | lastname | date | month | year | phone          | email                | password     |
      |           | Grace2   |   10 |    10 | 2000 | 08112233440011 | delf_test2@gmail.com | HwXnxaZD17M= |

  @Empty_lastname
  Scenario Outline: Register with empty lastname
    Given I navigate to YellowFit application
    When I click Account button
    And I click Create Account button
    And I input firstname <firstname>, lastname <lastname>, date <date>, month <month>, year <year>, phone <phone>, email <email>, and password <password>
    And I click Register button
    Then I should see error 'Last Name tidak boleh kosong!'

    Examples: 
      | firstname | lastname | date | month | year | phone          | email                | password     |
      | Hazel     |          |   10 |    10 | 2000 | 08112233440011 | delf_test2@gmail.com | HwXnxaZD17M= |

  @Empty_phone
  Scenario Outline: Register with empty phone
    Given I navigate to YellowFit application
    When I click Account button
    And I click Create Account button
    And I input firstname <firstname>, lastname <lastname>, date <date>, month <month>, year <year>, phone <phone>, email <email>, and password <password>
    And I click Register button
    Then I should see error 'Phone tidak boleh kosong!'

    Examples: 
      | firstname | lastname | date | month | year | phone | email                | password     |
      | Hazel     | Grace    |   10 |    10 | 2000 |       | delf_test2@gmail.com | HwXnxaZD17M= |

  @Empty_email
  Scenario Outline: Register with empty email
    Given I navigate to YellowFit application
    When I click Account button
    And I click Create Account button
    And I input firstname <firstname>, lastname <lastname>, date <date>, month <month>, year <year>, phone <phone>, email <email>, and password <password>
    And I click Register button
    Then I should see error 'email tidak boleh kosong!'

    Examples: 
      | firstname | lastname | date | month | year | phone          | email | password     |
      | Hazel     | Grace    |   10 |    10 | 2000 | 08112233440011 |       | HwXnxaZD17M= |

  @Invalid_email_format
  Scenario Outline: Register with invalid email format
    Given I navigate to YellowFit application
    When I click Account button
    And I click Create Account button
    And I input firstname <firstname>, lastname <lastname>, date <date>, month <month>, year <year>, phone <phone>, email <email>, and password <password>
    And I click Register button
    Then I should see error 'masukan email yang benar!'

    Examples: 
      | firstname | lastname | date | month | year | phone          | email | password     |
      | Hazel5    | Grace5   |   10 |    10 | 2000 | 08112233440011 | ab12  | HwXnxaZD17M= |

  @Email_already_registered
  Scenario Outline: Register with email already registered
    Given I navigate to YellowFit application
    When I click Account button
    And I click Create Account button
    And I input firstname <firstname>, lastname <lastname>, date <date>, month <month>, year <year>, phone <phone>, email <email>, and password <password>
    And I click Register button
    Then I should see error 'Email already registered!'

    Examples: 
      | firstname | lastname | date | month | year | phone          | email              | password     |
      | Hazel     | Grace    |   10 |    10 | 2000 | 08112233440011 | mdelfiza@gmail.com | HwXnxaZD17M= |

  @Empty_password
  Scenario Outline: Register with empty password
    Given I navigate to YellowFit application
    When I click Account button
    And I click Create Account button
    And I input firstname <firstname>, lastname <lastname>, date <date>, month <month>, year <year>, phone <phone>, email <email>, and password <password>
    And I click Register button
    Then I should see error 'password tidak boleh kosong!'

    Examples: 
      | firstname | lastname | date | month | year | phone          | email                | password |
      | Hazel     | Grace    |   10 |    10 | 2000 | 08112233440011 | delf_test2@gmail.com |          |

  @Invalid_password
  Scenario Outline: Register with invalid password
    Given I navigate to YellowFit application
    When I click Account button
    And I click Create Account button
    And I input firstname <firstname>, lastname <lastname>, date <date>, month <month>, year <year>, phone <phone>, email <email>, and password <password>
    And I click Register button
    Then I should see error 'Password harus 4-15 Digit hanya berisi karakter, angka numerik, garis bawah!'

    Examples: 
      | firstname | lastname | date | month | year | phone          | email                | password |
      | Hazel     | Grace    |   10 |    10 | 2000 | 08112233440011 | delf_test2@gmail.com | a1       |

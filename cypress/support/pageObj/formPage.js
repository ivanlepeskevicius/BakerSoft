class formPage {
  form() {
    return cy.get("customerForm");
  }
  firtsName() {
    return cy.get('input[name="customer.firstName"]');
  }
  lastName() {
    return cy.get('input[name="customer.lastName"]');
  }
  address() {
    return cy.get('input[name="customer.address.street"]');
  }
  city() {
    return cy.get('input[name="customer.address.city"]');
  }
  state() {
    return cy.get('input[name="customer.address.state"]');
  }
  zipCode() {
    return cy.get('input[name="customer.address.zipCode"]');
  }
  phoneNbr() {
    return cy.get('input[name="customer.phoneNumber"]');
  }
  ssn() {
    return cy.get('input[name="customer.ssn"]');
  }
  username() {
    return cy.get('input[name="customer.username"]');
  }
  password() {
    return cy.get('input[name="customer.password"]');
  }
  confirmPassword() {
    return cy.get('input[name="repeatedPassword"]');
  }
  SubmitBtn() {
    return cy.get('input[value="Register"]');
  }

  errorMsgs() {
  let msg = {
    firstName: "First name is required.",
    lastName: "Last name is required.",
    address: "Address is required.",
    city: "City is required.",
    state: "State is required.",
    zipCode: "Zip Code is required.",
    ssn: "Social Security Number is required.",
    username: "Username is required.",
    password: "Password is required.",
    confirmPassword: "Password confirmation is required."
  }
  return msg;
  }

}
export default formPage;

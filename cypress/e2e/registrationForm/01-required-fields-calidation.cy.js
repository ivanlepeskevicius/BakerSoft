import formPage from "../../support/pageObj/formPage";

describe("Required fields validation", () => {
  const form = new formPage();
  beforeEach(() => {
    cy.intercept("POST", "**/register.htm**").as("registerUser");
    cy.visit("/register.htm");
  });

  it("should display error message when submitting required fields empty", () => {
    form
      .SubmitBtn()
      .click()
      .then(() => {
        cy.wait("@registerUser").then(() => {
          cy.get(".error").should("have.length", 10); //The Phone# field doesn't have a validation message
          cy.get(".error")
            .first()
            .should("have.text", form.errorMsgs().firstName);
          cy.get(".error").eq(1).should("have.text", form.errorMsgs().lastName);
          cy.get(".error").eq(2).should("have.text", form.errorMsgs().address);
          cy.get(".error").eq(3).should("have.text", form.errorMsgs().city);
          cy.get(".error").eq(4).should("have.text", form.errorMsgs().state);
          cy.get(".error").eq(5).should("have.text", form.errorMsgs().zipCode);
          cy.get(".error").eq(6).should("have.text", form.errorMsgs().ssn);
          cy.get(".error").eq(7).should("have.text", form.errorMsgs().username);
          cy.get(".error").eq(8).should("have.text", form.errorMsgs().password);
          cy.get(".error")
            .last()
            .should("have.text", form.errorMsgs().confirmPassword);
        });
      });
  });

  //This test can be expanded to include other kind of specific validations for each field
  //For example, some fields have a specific format that can be validated (SSN, Phone#, Zip Code, etc.)
  //Other fields should only accept specific characters (numbers, letters, etc.)
  //Other fields should only accept specific values (State, Country, etc.)
  //Password fields should be validated to make sure they match
});

import formPage from "../../support/pageObj/formPage";

describe("Successful submission", () => {
  const form = new formPage();
  let data;
  let randomNbr = Math.floor(Math.random() * 1000000);
  before(() => {
    cy.fixture("dummyUser").then((fileInfo) => {
      data = fileInfo;
    });
    cy.intercept("POST", "**/register.htm**").as("registerUser");
    cy.visit("/register.htm");
  });

  it("should display success message when submitting valid data", () => {
    form.firtsName().type(data.firstName);
    form.lastName().type(data.lastName);
    form.address().type(data.address);
    form.city().type(data.city);
    form.state().type(data.state);
    form.zipCode().type(data.zipCode);
    form.phoneNbr().type(data.phoneNbr);
    form.ssn().type(data.ssn);
    form.username().type(data.username + randomNbr);
    form.password().type(data.password);
    form.confirmPassword().type(data.password);
    form
      .SubmitBtn()
      .click()
      .then(() => {
        cy.wait("@registerUser").then(() => {
          cy.get(".title").should(
            "have.text",
            "Welcome " + data.username + randomNbr
          );
          cy.get("#rightPanel > p").should(
            "have.text",
            "Your account was created successfully. You are now logged in."
          );
          cy.get(".smallText").should(
            "have.text",
            "Welcome " + data.firstName + " " + data.lastName
          );
          cy.get("#leftPanel > ul").should("include.text", "Log Out");
        });
      });
  });
});

describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have number buttons that update the display of the running total', () => {
    cy.get('#number5').click();
    cy.get('#number3').click();
    cy.get('#number7').click();
    cy.get('.display').should('contain', '537')
  })

  it('should have arithmetical operations that update the display with the result of the operation', () => {
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '12')
  })

  it('should be able to chain multiple opertions together', () => {
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number7').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click()
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '36')
  })

  it('should have the correct output for a negative number', () => {
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-27');
  });

  it('should have the correct output for a decimal number', () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4.8');
  });

  it('should display 0 after dividing a number by 0', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0');
  });
  
})

/// <reference types="Cypress" />
describe('assertions', () => {
    it('wepsite assertion', () => {
        cy.visit('https://www.almosafer.com/ar');
        cy.get('.cta__saudi').click();
        cy.get('[data-testid="Header__CurrencySelector"]').invoke('text').should('include',"SAR");
        cy.get('[data-testid="Header__LanguageSwitch"]').invoke('text').should('include',"English");
        cy.get('#uncontrolled-tab-example-tab-flights').should('have.class', "active")

    });
});
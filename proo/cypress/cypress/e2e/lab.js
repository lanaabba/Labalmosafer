/// <reference types="Cypress" />
describe('test Almosafer website', () => {
    it('random select ', () => {

    let websites = [
        'https://www.almosafer.com/ar','https://www.almosafer.com/en', ];
  
      // Generate a random index to select a website
      let WebsiteRandom = Math.floor(Math.random() * websites.length);
  
      // Select the random website URL
      let randomWebsite = websites[WebsiteRandom];
  
      // Visit the selected website
      cy.visit(randomWebsite);
      cy.get('.cta__saudi').click()
      cy.get('#uncontrolled-tab-example-tab-hotels > .sc-dWcDbm').click()
      cy.get('[data-testid="Header__LanguageSwitch"]').invoke('text').then((lang) => {
        let RandomLocation;

        if (lang.includes('English'))
         { 
            let arabicLocation = ['دبي', 'جدة'];
        RandomLocation= arabicLocation[Math.floor(Math.random() * arabicLocation.length)]; 

        } else
         {
            let englishLocation = ['Dubai', 'Jeddah', 'Riyadh'];
            location = englishLocation[Math.floor(Math.random() * englishLocation.length)];
        }
        cy.get('[data-testid="AutoCompleteInput"]').type(RandomLocation);
        cy.get('[data-testid="AutoCompleteResultItem0"]').click() 

    })
    let Options = ["A", "B"];
    let randomRoom = Math.floor(Math.random() * Options.length);
    cy.get('[data-testid="HotelSearchBox__ReservationSelect_Select"]').select(randomRoom);

    cy.get('[data-testid="HotelSearchBox__SearchButton"]').click();


    });
});
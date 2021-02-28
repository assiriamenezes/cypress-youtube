describe("Youtube", () => {
   it('Visit the Youtube Site', () =>{
      
       cy.visit("https://www.youtube.com/");
       
   });

   it("Verify the menus", () => {
      cy.get('#search-form > #container').type("Cypress automation");
      cy.get('#search-icon-legacy').click();
      cy.contains('Cypress Web Automation').click();
      cy.wait(2000);
      cy.get(':nth-child(3) > .yt-simple-endpoint > #text').click();
      cy.get('#copy-button > .yt-simple-endpoint > #button').click();
      cy.get('#button > .ytd-unified-share-panel-renderer').click();
      cy.get('#start > #guide-button > #button > #guide-icon').click();
      cy.get(':nth-child(1) > #items > :nth-child(1) > #endpoint > paper-item.style-scope').click();
   });

   it("Execute others steps in Youtube", () => {
      cy.visit("https://www.youtube.com/");
      cy.wait(2000);
      cy.contains('Notícias').click();
      cy.contains('Ao vivo agora - Jornalismo').click();
      cy.contains('REPRODUZIR TUDO').click();
      cy.wait(2000);
      cy.get('#search-form > #container').type("Automation Tests");
      cy.get('#search-icon-legacy').click();
   });

   it("Verify any video", () => {
      cy.visit("https://www.youtube.com/");
      cy.get(':nth-child(9) > #endpoint > paper-item.style-scope > .title').click();
      cy.contains('Recently Popular').click();
      cy.wait(2000);
      cy.contains('One Day in Slovakia - 360° Virtual Tour').click();
      cy.wait(6000);
      cy.contains('Pular anúncios').click();
      cy.get('.ytp-size-button').click();
      cy.scrollTo('top');
   });

});
import LoginPage from '../e2e/LoginPage';

describe('Cart Icon Increment', () => {
    const loginPage = new LoginPage();

  beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('should login with valid credentials', () => {
        loginPage.enterUsername('standard_user');
        loginPage.enterPassword('secret_sauce');
        loginPage.clickLogin();
        cy.url().should('include', '/inventory');

        cy.wait(4000);

        cy.get('#add-to-cart-sauce-labs-backpack').click();

        cy.get('.shopping_cart_container') // or '#cart-icon span'
        .should('be.visible')
        .and('have.text', '1'); // Assert it shows '1' (or whatever the expected count is after adding one item)
        
        cy.scrollTo('top');
        cy.wait(2000)

    
    });

   
});
// Open https://the-internet.herokuapp.com/login

// Please automate next test cases:
// 1. Login with valid creds (tomsmith/SuperSecretPassword!) and assert you successfully logged in
// 2. Login with invalid creds and check validation error
// 3. Logout from app and assert you successfully logged out

describe('Yurii Parfinenko Homework', () => {
    beforeEach(function () {
        cy.visit('https://the-internet.herokuapp.com/login');
    });

    it ('login with valid creds', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.fa').click();
        cy.get('#flash').should('contain', 'You logged into a secure area!');
    });

    it ('login with invalid creds', () => {
        cy.get('#username').type('tomsmithInvalid');
        cy.get('#password').type('NotSuperSecretPassword!');
        cy.get('.fa').click();
        cy.get('#flash').should('contain', 'Your username is invalid!');
    });

    it ('logout from the app', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.fa').click();
        cy.get('.button').click();
        cy.get('#flash').should('contain', 'You logged out of the secure area!');
    });

});
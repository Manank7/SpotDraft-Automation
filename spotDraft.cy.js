import { clickOnDeleteIcon, clickOnMyBooksInHeader, clickOnSignIn, clickOnWantToRead, loginWithCreds, logoutOfAccount, searchForBook } from "../fixtures/helper";

const email = "manankumar765@gmail.com";
const password = "GoodReads@1234";
describe('template spec', () => {
  before(() => {
    const randomString = Math.random() * 100;
    // cy.intercept('GET', '**/aps-comm/aps_csm.js').as(`waitForPage${randomString}`);
    cy.visit('https://www.goodreads.com/');
    // cy.wait(`@waitForPage${randomString}`);
  })

  it('Spot Draft Assignment', () => {
    clickOnSignIn();
    loginWithCreds(email, password);
    searchForBook("Ugly Love");
    clickOnWantToRead();
    clickOnMyBooksInHeader();
    clickOnDeleteIcon();
    logoutOfAccount();
  })
})
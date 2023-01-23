export const clickOnSignIn = () => {
    cy.get('[id="signIn"] [class="gr-hyperlink"]').click();
    cy.get('[class*="authPortalSignInButton"]').click();
}

export const loginWithCreds = (email , password) => {
    cy.get('[id="ap_email"]').type(`{selectAll}${email}`);
    cy.get('[id="ap_password"]').type(`{selectAll}${password}`);
    cy.get('[id="signInSubmit"]').click();
}

export const searchForBook = (bookName) => {
    cy.get('[class*="searchBox__input"]').first().type(`{selectAll}${bookName}`);
    cy.get('[id*="bookSearchResults"] [class*="bookSearchResults__item"]').first().click();
}

export const clickOnWantToRead = () => {
    cy.get('button[class="wtrToRead"]').click();
}

export const clickOnMyBooksInHeader = () => cy.get('[class="siteHeader__menuList"] [class*="siteHeader__topLevelItem"]').contains('My Books').click({force:true});

export const clickOnDeleteIcon = () => cy.get('.deleteLink').find('[alt="Remove from my books"]').click();

export const logoutOfAccount = () => {
    cy.get('.dropdown__trigger [alt= "Manan Kumar"]').click();
    cy.wait(500);
    cy.get('.siteHeader__subNav [role="menuitem Sign out"]').click();

}
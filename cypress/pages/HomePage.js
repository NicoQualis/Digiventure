class HomePage {
    elements = {
        btn_quieroFavacard: () => cy.get('.header-title-container > .header-button', { timeout: 30000 })
    };

    click_btn_quieroFavacard() {
        this.elements.btn_quieroFavacard().click()
    }
}

module.exports = new HomePage();



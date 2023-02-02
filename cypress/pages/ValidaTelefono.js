class ValidaTelefono {
    elements = {
        btn_enviarCodigo: () => cy.get('#button-send-code', { timeout: 30000 }),
        in_codigo:() => cy.get('.pincode-input-container > :nth-child(1)', { timeout: 30000 }),
        btn_verificarCodigo:() => cy.get('#button-verify-code', { timeout: 30000 })
    };

    click_btn_enviarCodigo() {
        this.elements.btn_enviarCodigo().click()
    }

    type_in_codigo(codigo) {
        this.elements.in_codigo().type(codigo)
    }

    click_btn_verificarCodigo() {
        this.elements.btn_verificarCodigo().click()
    }
}

module.exports = new ValidaTelefono();



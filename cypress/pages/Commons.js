class Commons {
    elements = {
        btn_continuar:() => cy.get('#button-next', { timeout: 30000 }),
        btn_aceptoContrato:() => cy.get('#btn-main', { timeout: 30000 }),
        in_firma:() => cy.get('canvas', { timeout: 30000 }),
        lbl_felicitaciones:() => cy.get('header', { timeout: 30000 }),
        lbl_aprobada:() => cy.get('h2', { timeout: 30000 }),
        lbl_condiciones:() => cy.get('h3', { timeout: 30000 }),
        btn_wtsp:() => cy.get('[href*="https://api.whatsapp.com/send?phone=5492236993282&text=Mi%20nombre%20es"]', { timeout: 30000 }),
        btn_listo:() => cy.get('#button-primary', { timeout: 30000 })
    };

    click_btn_continuar() {
        this.elements.btn_continuar().click()
    }

    click_btn_aceptoContrato() {
        this.elements.btn_aceptoContrato().click()
    }

    firmar_contrato() {
        this.elements.in_firma().click()
    }
    
    validar_aprobacion() {
        this.elements.lbl_felicitaciones().should('have.text', 'Felicitaciones')
        this.elements.lbl_aprobada().should('have.text', 'Tu tarjeta ha sido aprobada')
        this.elements.lbl_condiciones().should('have.text', 'Sólo el titular podrá recibirla o retirarla según la opción elegida.')
        this.elements.btn_wtsp().should('be.visible')
        this.elements.btn_listo().should('be.visible')
    }
}

module.exports = new Commons();



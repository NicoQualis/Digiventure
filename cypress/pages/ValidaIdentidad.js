class ValidaIdentidad {
    elements= {
        btn_frenteDni:() => cy.get('#button-start-camera', { timeout: 30000 }),
        btn_dorsoDni:() => cy.get('section[class*="dniback-container"] button', { timeout: 30000 }),
        btn_fotoRostro:() => cy.get('section[class*="camera01-container"] button', { timeout: 30000 }),
        btn_fotoRostro2:() => cy.get('section[class*="camera02-container"] button', { timeout: 30000 }),
        lbl_tipoFoto:() => cy.get('h4', { timeout: 30000 })
    }

    click_btb_frenteDni() {
        this.elements.btn_frenteDni().click()
        cy.wait(1000)
        this.elements.btn_frenteDni().click()
    }

    click_btb_dorsoDni() {
        this.elements.btn_dorsoDni().click()
        cy.wait(2500)
        this.elements.btn_dorsoDni().click()
    }

    click_btb_fotoRostro() {
        this.elements.btn_fotoRostro().click()
        cy.wait(4500)
        this.elements.btn_fotoRostro().click()
        cy.wait(4000)
        this.elements.lbl_tipoFoto().invoke('text').then((text) => {
            cy.log("Tipo de foto solicitada: " + text)
            if(text.includes('Necesitamos que tomes una última foto con los dos ojos cerrados.')) {
                this.elements.btn_fotoRostro2().click()
                cy.wait(4500)
                this.elements.btn_fotoRostro2().click()
            }else if(text.includes('Sólo una foto más. Necesitamos una foto de tu rostro sonriendo.')) {
                this.elements.btn_fotoRostro2().click()
                cy.wait(6500)
                this.elements.btn_fotoRostro2().click()
            }
        })       
    }
}

module.exports = new ValidaIdentidad()
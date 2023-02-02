class AgregaDireccion {
    elements = {
        btn_siguiente:() => cy.get('section[class*="address-welcome-container"] button', { timeout: 30000 }),
        in_direccion:() => cy.get('#address', { timeout: 30000 }),
        in_numeracion: () => cy.get('#street_number', { timeout: 30000 }),
        in_pisoDpto: () => cy.get('#additionalInformation', { timeout: 30000 }),
        in_comentarios: () => cy.get('#additionalInformation3', { timeout: 30000 }),
        in_barrio:() => cy.get('#additionalInformation2', { timeout: 30000 }),
        in_codPos:() => cy.get('#zip_code', { timeout: 30000 }),
        in_localidad:() => cy.get('#location', { timeout: 30000 }),
        btn_continuar:() => cy.get('section[class*="addressmanual-container"] button', { timeout: 30000 }),
        btn_domicilio:() => cy.get(':nth-child(2) > label > #retiro', { timeout: 30000 }),
        btn_sucursal:() => cy.get(':nth-child(3) > label > #retiro', { timeout: 30000 }),
        in_select:() => cy.get('select', { timeout: 30000 }),
    };

    
    click_btn_siguiente() {
        this.elements.btn_siguiente().click()
    }

    type_in_direccion(direccion) {
        this.elements.in_direccion().type(direccion,{force: true})
    }

    type_in_numeracion(numeracion) {
        this.elements.in_numeracion().type(numeracion,{force: true})
    }

    type_in_pisoDpto(pisoDpto) {
        this.elements.in_pisoDpto().type(pisoDpto,{force: true})
    }

    type_in_comentarios(comentarios) {
        this.elements.in_comentarios().type(comentarios,{force: true})
    }

    type_in_barrio(barrio) {
        this.elements.in_barrio().type(barrio,{force: true})
    }

    type_in_codPos(codPos) {
        this.elements.in_codPos().type(codPos,{force: true})
    }

    type_in_localidad(localidad) {
        this.elements.in_localidad().type(localidad,{force: true})
    }

    click_btn_continuar() {
        this.elements.btn_continuar().click()
    }

    select_retiro(dondeRecibir, sucursal) {
        if(dondeRecibir.includes('En mi domicilio')) {
            this.elements.btn_domicilio().click()
        }else if(dondeRecibir.includes('En alguna sucursal')) {
            this.elements.btn_sucursal().click()
            this.elements.in_select().select(sucursal)
        }
    }
}

module.exports = new AgregaDireccion();



class DatosPersonales {
    elements = {
        btn_fijo:() => cy.get(':nth-child(2) > label > #tipoTelefono', { timeout: 30000 }),
        btn_movil:() => cy.get(':nth-child(3) > label > #tipoTelefono', { timeout: 30000 }),
        in_telAlternativo: () => cy.get('#telefonoAlternativo', { timeout: 30000 }),
        in_nomTitular: () => cy.get('#nombreTitularTelefono', { timeout: 30000 }),
        in_fechaPago: (fecha) => cy.get('input[data-value="' + fecha + '"]', { timeout: 30000 }),
    };

    
    select_tipoTelAlternativo(tipoTelAlternativo) {
        if(tipoTelAlternativo.includes('Fijo')) {
            this.elements.btn_fijo().click()
        }else if(tipoTelAlternativo.includes('Celular')) {
            this.elements.btn_movil().click()
        }
    }

    type_in_telAlternativo(telefono) {
        this.elements.in_telAlternativo().type(telefono,{force: true})
    }

    type_in_nomTitular(titular) {
        this.elements.in_nomTitular().type(titular,{force: true})
    }

    select_fechaPago(fechaPago) {
        this.elements.in_fechaPago(fechaPago).click()
    }
}

module.exports = new DatosPersonales();



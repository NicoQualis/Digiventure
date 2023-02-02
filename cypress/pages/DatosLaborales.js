class DatosPersonales {
    elements = {
        btn_si:() => cy.get(':nth-child(2) > label > span', { timeout: 30000 }),
        btn_no:() => cy.get(':nth-child(3) > label > span', { timeout: 30000 }),
        select_ocupacion:() => cy.get('select', { timeout: 30000 }),
        in_puesto:() => cy.get('#puesto', { timeout: 30000 }),
        in_ingresos: () => cy.get('#ingreso', { timeout: 30000 }),
        in_telLaboral: () => cy.get('#telLaboral', { timeout: 30000 })
    };

    
    select_trabaja(trabaja, ocupacion, puesto, ingresos, telefono) {
        if(trabaja.includes('No')) {
            this.elements.btn_no().click()
        }else if(trabaja.includes('Si')) {
            this.elements.btn_si().click()
            this.elements.select_ocupacion().select(ocupacion)
            this.elements.in_puesto().type(puesto)
            this.elements.in_ingresos().type(ingresos)
        }
        this.elements.in_telLaboral().type(telefono)
    }
}

module.exports = new DatosPersonales();



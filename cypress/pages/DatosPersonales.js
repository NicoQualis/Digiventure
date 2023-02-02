class DatosPersonales {
    elements = {
        in_nombreApellido: () => cy.get('#name', { timeout: 30000 }),
        in_email: () => cy.get('#email', { timeout: 30000 }),
        in_dni: () => cy.get('#id_number', { timeout: 30000 }),
        in_fechaNacimiento: () => cy.get('#birthDate', { timeout: 30000 }),
        btn_sexoMasc:() => cy.get(':nth-child(2) > label > #gender', { timeout: 30000 }),
        btn_sexoFem:() => cy.get(':nth-child(3) > label > #gender', { timeout: 30000 }),
        in_numTel:() => cy.get('#mobile_phone', { timeout: 30000 }),
        select_sucursal:() => cy.get('#react-select-Localidad--value > .Select-value', { timeout: 30000 }),
        opt_sucursal:(sucursal) => cy.get('#react-select-Localidad--list > div[aria-label="' + sucursal + '"]', { timeout: 30000 }),
        select_estadoCivil:() => cy.get('#react-select-estado_civil--value > .Select-value', { timeout: 30000 }),
        opt_estadoCivil:(estado) => cy.get('#react-select-estado_civil--list > div[aria-label="' + estado + '"]', { timeout: 30000 }),
        cbox_tyc:() => cy.get('#tyc', { timeout: 30000 })
    };

    
    type_in_nombreApellido(nombreApellido) {
        this.elements.in_nombreApellido().type(nombreApellido)
    }

    type_in_email(email) {
        this.elements.in_email().type(email)
    }

    type_in_dni(dni) {
        this.elements.in_dni().type(dni,{force: true});
    }

    type_in_fechaNacimiento(fechaNac) {
        this.elements.in_fechaNacimiento().type(fechaNac,{force: true});
    }

    click_btnSexo(sexo) {
        if(sexo.includes('Masculino')){
            this.elements.btn_sexoMasc().click()
        }else if(sexo.includes('Femenino')){
            this.elements.btn_sexoFem().click()
        }
    }

    type_in_numTel(telefono) {
        this.elements.in_numTel().type(telefono,{force: true});
    }

    select_sucursal(sucursal) {
        this.elements.select_sucursal().click()
        this.elements.opt_sucursal(sucursal).click()
    }

    select_estadoCivil(estado) {
        this.elements.select_estadoCivil().click()
        this.elements.opt_estadoCivil(estado).click()
    }

    check_tyc() {
        this.elements.cbox_tyc().click()
    }
}

module.exports = new DatosPersonales();



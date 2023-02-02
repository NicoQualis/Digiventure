import {Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";
import Commons from "../../pages/Commons";
import HomePage from "../../pages/HomePage";
import DatosPersonales from "../../pages/DatosPersonales";
import ValidaTelefono from "../../pages/ValidaTelefono";
import DatosContacto from "../../pages/DatosContacto";
import AgregaDireccion from "../../pages/AgregaDireccion";
import DatosLaborales from "../../pages/DatosLaborales";
import ValidaIdentidad from "../../pages/ValidaIdentidad";
  
  Given("El usuario ingresa a la página principal", function () {
    cy.visit("/")
  });

  Given("Presiona el botón ¡Quiero mi Favacard!", function () {
    HomePage.click_btn_quieroFavacard()
  });

  Given("Completa el formulario de datos personales con datos válidos", function (dataTable) {
    dataTable.hashes().forEach((row) => {
      DatosPersonales.type_in_nombreApellido(row.Nombre)
      DatosPersonales.type_in_email(row.EMail)
      DatosPersonales.type_in_dni(row.dni)
      DatosPersonales.type_in_fechaNacimiento(row.Nacimiento)
      DatosPersonales.click_btnSexo(row.Sexo)
      DatosPersonales.type_in_numTel(row.Telefono)
      DatosPersonales.select_sucursal(row.Sucursal)
      DatosPersonales.select_estadoCivil(row.EstadoCivil)
    });
  });

  Given("Presiona el checkbox Términos y condiciones", function () {
    DatosPersonales.check_tyc()
  });

  Given("Presiona el botón Continuar", function () {
    Commons.click_btn_continuar()
  });

  Given("Presiona el botón Enviar Código forzando codigo {string}", function (codigo) {
    cy.url().should('include', '/smsverify')
    cy.visit('/smsverify?subdomain=tarjeta.favacard.com.ar&devCode=' + codigo)
    ValidaTelefono.click_btn_enviarCodigo()
  });

  Given("Valida el teléfono completando el codigo {string}", function (codigo) {
    ValidaTelefono.type_in_codigo(codigo)
    ValidaTelefono.click_btn_verificarCodigo()
  });
  
  Given("Completa el formulario de Datos de Contacto", function (dataTable) {
    dataTable.hashes().forEach((row) => {
      DatosContacto.select_tipoTelAlternativo(row.Alternativo)
      DatosContacto.type_in_telAlternativo(row.Telefono)
      DatosContacto.type_in_nomTitular(row.Titular)
      DatosContacto.select_fechaPago(row.FechaPago)
    })
  });

  Given("Presiona sobre el botón Siguiente de la pantalla  Agrega tu direccion", function () {
    AgregaDireccion.click_btn_siguiente()
  });

  Given("Completa el formulario de Agrega tu direccion", function (dataTable) {
    dataTable.hashes().forEach((row) => {
      AgregaDireccion.type_in_direccion(row.Direccion)
      AgregaDireccion.type_in_numeracion(row.Numero)
      AgregaDireccion.type_in_pisoDpto(row.Piso)
      AgregaDireccion.type_in_comentarios(row.Comentarios)
      AgregaDireccion.type_in_barrio(row.Barrio)
      AgregaDireccion.type_in_codPos(row.CodigoPostal)
      AgregaDireccion.type_in_localidad(row.Localidad)
    })
  });

  Given("Presiona el botón Continuar del formulario Agrega tu direccion", function () {
    AgregaDireccion.click_btn_continuar()
  });

  Given("Selecciona donde recibirá la tarjeta", function (dataTable) {
    dataTable.hashes().forEach((row) => {
      AgregaDireccion.select_retiro(row.DondeRecibir, row.Sucursal)
    })
  });

  Given("Completa el formulario de Datos Laborales", function (dataTable) {
    dataTable.hashes().forEach((row) => {
      DatosLaborales.select_trabaja(row.Trabaja, row.Ocupacion, row.Puesto, row.Ingresos, row.Telefono)
    })
  });

  Given("Presiona el botón Acepto el contrato", function () {
    Commons.click_btn_aceptoContrato()
  });
  
  Given("Ingresa firma en Firma el contrato", function () {
    Commons.firmar_contrato()
  });

  Given("Valida identidad subiendo foto Frente de DNI", function () {
    ValidaIdentidad.click_btb_frenteDni()
  });

  Given("Valida identidad subiendo foto Dorso de DNI", function () {
    ValidaIdentidad.click_btb_dorsoDni()
  });

  When("Realiza el último paso validando su identidad subiendo Foto rostro", function () {
    ValidaIdentidad.click_btb_fotoRostro()
  });

  Then("El usuario completa exitosamente la operación y ve en pantalla el mensaje correspondiente", function () {
    Commons.validar_aprobacion()
  });

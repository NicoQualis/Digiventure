Feature: Demo

    Feature con escenario para POC.  
    
    @POC
    Scenario: Iniciar solicitud de tarjeta (usuario con buen perfil crediticio)
        Given El usuario ingresa a la página principal
        And Presiona el botón ¡Quiero mi Favacard!
        And Completa el formulario de datos personales con datos válidos
            | Nombre          | EMail          | dni       | Nacimiento | Sexo      | Telefono   | Sucursal | EstadoCivil |
            | Rioseco Nicolas | nico@gmail.com | 34874115  | 17/05/1990 | Masculino | 2494281960 | Tandil   | Separado/a  |
        And Presiona el checkbox Términos y condiciones
        And Presiona el botón Continuar
        And Presiona el botón Enviar Código forzando codigo "123456"
        And Valida el teléfono completando el codigo "123456"
        And Completa el formulario de Datos de Contacto
            | Alternativo | Telefono   | Titular | FechaPago         |
            | Celular     | 2494281960 | Nico    | día 8 de cada mes |
        And Presiona el botón Continuar
        And Presiona sobre el botón Siguiente de la pantalla  Agrega tu direccion
        And Completa el formulario de Agrega tu direccion
            | Direccion | Numero | Piso | Comentarios | Barrio   | CodigoPostal | Localidad |
            | Dufau     | 1567   | -    | Casa        | Procrear | 7000         | Tandil    |
        And Presiona el botón Continuar del formulario Agrega tu direccion
        And Selecciona donde recibirá la tarjeta
            | DondeRecibir       | Sucursal |
            | En alguna sucursal | Tandil   |
        And Presiona el botón Continuar
        And Completa el formulario de Datos Laborales
            | Trabaja | Ocupacion  | Puesto        | Ingresos | Telefono   |
            | Si      | Empleado/a | QA Automation | 1000     | 2494281960 |
        And Presiona el botón Continuar
        And Presiona el botón Acepto el contrato
        And Ingresa firma en Firma el contrato
        And Presiona el botón Continuar
        And Valida identidad subiendo foto Frente de DNI
        And Valida identidad subiendo foto Dorso de DNI
        When Realiza el último paso validando su identidad subiendo Foto rostro
        Then El usuario completa exitosamente la operación y ve en pantalla el mensaje correspondiente
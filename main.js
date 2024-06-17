let opt = '';
let nombre = '';
let apellido = '';
let edad = '';
let mail = '';
let telefono = '';

function saludo(){
    alert('Bienvenido al gestor de datos personales, haga click en ACEPTAR para continuar');
};

function menuDatos (){
   opt = prompt('Elija una opción:'+'\n-------------------'+'\n1) Nombre'+'\n2) Apellido'+'\n3) Edad'+'\n4) Mail'+'\n5) Telefono'+'\n6) Ver datos almacenados'+'\n7) Salir del menú')
};

function salida(){
    alert('Saliendo del sistema de gestión de datos...');
    alert('Desconexión exitosa, gracias por utilizar nuestro servicio')
}

saludo()
menuDatos();

while (opt != '7') {
    switch (opt){
        case '1':
            nombre = prompt('Ingrese su nombre:');
            break;
        case '2':
            apellido = prompt('Ingrese su apellido:');
            break;
        case '3':
            edad = prompt('Ingrese su edad:');
            if (edad<18){
                alert('Usted es menor de edad, algunas opciones de uso de la página quedarán restringidas')
            }
            break;
        case '4':
            mail = prompt('Ingrese su dirección de correo electrónico:');
            break;
        case '5':
            telefono = prompt('Ingrese su teléfono:');
            break;
        case '6':
            alert('Nombre: '+nombre+'\nApellido: '+apellido+'\nEdad: '+edad+'\nDirección de correo: '+mail+'\nTeléfono: '+telefono);
            break;
        default:
            alert ('Opción no válida, intente nuevamente');
            break;
    }
    menuDatos();
}

salida()
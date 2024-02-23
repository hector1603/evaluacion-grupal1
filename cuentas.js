cuentas = [
    { numeroCuenta: "02234567", cedula: "1714616123", nombre: "Juan", apellido: "Perez", saldo: 0.0 },
    { numeroCuenta: "02345211", cedula: "1281238233", nombre: "Felipe", apellido: "Caicedo", saldo: 0.0 }
];

cargar = function () {
    mostrarComponente("divCuentas");
    ocultarComponente("divMovimientos");
    ocultarComponente("divTransacciones");

}

/*
    Muestra en pantalla una tabla con la información de todas las cuentas del arreglo.
    Columnas: NUMERO CUENTA, NOMBRE, SALDO
    En la columna NOMBRE concatenar el nombre y el apellido
*/
mostrarCuentas = function () {
    let cmpCuentas = document.getElementById("tablaCuentas");
    let tablaCuentas = "<table><tr><th>CEDULA</th><th>NOMBRE</th><th>Nro CUENTA</th><th>SALDO</th></tr>";
    for (let i = 0; i < cuentas.length; i++) {
        let cuenta = cuentas[i];
        tablaCuentas += "<tr><td>" + cuenta.cedula + "</td>"
            + "<td>" + cuenta.nombre + " " + cuenta.apellido + "</td>"
            + "<td>" + cuenta.numeroCuenta + "</td>"
            + "<td>" + cuenta.saldo + "</td></tr>";
    }
    tablaCuentas += "</table>";
    cmpCuentas.innerHTML = tablaCuentas;
}



/*
    Busca la cuenta en el arreglo en función del número de cuenta,
    si existe retorna el objeto cuenta, caso contrario retorna null. 
*/
buscarCuenta = function (numeroCuenta) {
    let cuentaEncontrada = null;
    for(let i = 0; i < cuentas.length; i++) {
        let verificarCuenta = cuentas[i];
        if(verificarCuenta.numeroCuenta == numeroCuenta) {
            cuentaEncontrada = verificarCuenta;
            break;
        }
    }
    return cuentaEncontrada;
}

/*
    Agrega una cuenta al arreglo, solamente si no existe otra cuenta con el mismo numero.
    No retorna nada
*/
agregarCuenta = function (cuenta) {
    //Si ya existe mostrar un alert CUENTA EXISTENTE
    //Si se agrega, mostrar un alert CUENTA AGREGADA
    let estadoCuenta = buscarCuenta(cuenta.numeroCuenta);
    if(estadoCuenta == null) {
        cuentas.push(cuenta);
        alert("Cuenta agregada");
    } else {
        alert("Cuenta existente");
    }
}

agregar = function () {
    //Toma los valores de las cajas de texto, sin validaciones
    //Crea un objeto cuenta y agrega los atributos con los valores de las cajas respectivas
    //Invoca a agregarCuenta
    //Invoca a mostrarCuentas
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorCuenta = recuperarTexto("txtCuenta");

    let nuevaCuenta = {};
    nuevaCuenta.cedula = valorCedula;
    nuevaCuenta.nombre = valorNombre;
    nuevaCuenta.apellido = valorApellido;
    nuevaCuenta.numeroCuenta = valorCuenta;
    nuevaCuenta.saldo = 0;

    agregarCuenta(nuevaCuenta);
    mostrarCuentas();
}

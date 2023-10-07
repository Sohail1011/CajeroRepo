let cuentas = [
    { nombre: "Mali", saldo: 200, DNI: 5678902, password: 'helloworld' },
    { nombre: "Gera", saldo: 290, DNI: 7456781, password: 'l33t' },
    { nombre: "Maui", saldo: 67, DNI: 2256789, password: '123' }
]

if (cuentas.saldo > 700) {
    console.log('Saldo Incorrecto');
} else {
    console.log('Saldo Correcto');
}

function inspeccionarPassword(b) {
    if (b === cuentas.password) {

    } else {
        document.getElementById(b).innerText = 'Contraseña invalida';
    }
}
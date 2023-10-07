let cuentas = [
    { nombre: "Mali", saldo: 200, password: 'helloworld' },
    { nombre: "Gera", saldo: 290, password: 'l33t' },
    { nombre: "Maui", saldo: 67, password: '123' }
]

if (cuentas.saldo > 700) {

} else {

}

function inspeccionarPassword(b) {
    if (b === cuentas.password) {

    } else {
        document.getElementById(b).innerText = 'Contraseña invalida';
    }
}
let cuentas = [
    { nombre: "Mali", saldo: 200, DNI: 5678902, password: 'helloworld' },
    { nombre: "Gera", saldo: 290, DNI: 7456781, password: 'l33t' },
    { nombre: "Maui", saldo: 67, DNI: 2256789, password: '123' }
]

const btnIngreso = document.querySelector('button');

let pMessage = document.getElementById('message');
let inputDNI = document.getElementById('insertDNI');
/* let valorDNI = inputDNI.value; */
let inputPassword = document.getElementById('passwordBank');
/* let valorPassword = inputPassword.value; */

btnIngreso.addEventListener('click', (e) => {
    e.preventDefault();
    let autenticacion = false;

    cuentas.forEach((cuenta) => {
        if (inputDNI.value == cuenta.DNI && inputPassword.value == cuenta.password) {
            autenticacion = true;
        }
    });

    if (autenticacion) {
        console.log('Todo bien')
    } else {
        pMessage.style.display = 'block';
    }
});
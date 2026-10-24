//Ejercicio 1
class Cuenta {
    #saldo
    constructor(numero, titular, saldo) {
        this.numero = numero
        this.titular = titular
        this.#saldo = saldo
    }
    getSaldo() {
        return this.#saldo
    }
    setSaldo(nuevoSaldo) {
        this.#saldo = nuevoSaldo
    }
    consignar(valor) {
        if (valor <= 0) {
            console.log("Error: el valor a consignar debe ser mayor a cero")
            return
        }
        this.#saldo = this.#saldo + valor
        console.log("Consignación exitosa. Saldo: " + this.#saldo)
    }
    retirar(valor) {
        console.log("Este método lo implementa cada cuenta hija")
    }
    info() {
        return this.numero + " - " + this.titular + " - Saldo: " + this.#saldo
    }
}

class Ahorros extends Cuenta {
    retirar(valor) {
        if (valor <= 0) {
            console.log("Error: el valor a retirar debe ser mayor a cero")
            return
        }
        if (valor > this.getSaldo()) {
            console.log("Error: fondos insuficientes")
            return
        }
        if (this.getSaldo() - valor < 10000) {
            console.log("Error: en ahorros debe quedar mínimo 10000")
            return
        }
        this.setSaldo(this.getSaldo() - valor)
        console.log("Retiro de ahorros exitoso. Saldo: " + this.getSaldo())
    }
}

class Corriente extends Cuenta {
    retirar(valor) {
        if (valor <= 0) {
            console.log("Error: el valor a retirar debe ser mayor a cero")
            return
        }
        if (valor > this.getSaldo()) {
            console.log("Error: fondos insuficientes")
            return
        }
        this.setSaldo(this.getSaldo() - valor)
        console.log("Retiro de corriente exitoso. Saldo: " + this.getSaldo())
    }
}

let cuentas = []

function agregarCuenta(cuenta) {
    for (let i = 0; i < cuentas.length; i++) {
        if (cuentas[i].numero === cuenta.numero) {
            console.log("Error: ya existe una cuenta con el numero " + cuenta.numero)
            return
        }
    }
    cuentas.push(cuenta)
    console.log("Cuenta " + cuenta.numero + " agregada")
}

console.log("Casos validos")
let ahorro1 = new Ahorros("001", "Ana", 50000)
let corriente1 = new Corriente("002", "Luis", 30000)

agregarCuenta(ahorro1)
agregarCuenta(corriente1)

ahorro1.consignar(20000)
ahorro1.retirar(30000)
corriente1.retirar(25000)

console.log("Saldos")
cuentas.forEach(function(c) {
    console.log(c.info())
})

console.log("Casos de error")
ahorro1.consignar(-5000)
corriente1.retirar(100000)
agregarCuenta(new Ahorros("001", "Otro", 10000))
ahorro1.retirar(35000)

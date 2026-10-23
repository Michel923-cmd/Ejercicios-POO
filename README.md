# Taller de Programación Orientada a Objetos (POO) en JavaScript
Este repositorio contiene la solución del Ejercicio 1: Sistema de cuentas bancarias, desarrollado como evidencia para el taller de Programación Orientada a Objetos. 
El programa resuelve la situación cotidiana de administrar cuentas de ahorros y cuentas corrientes, aplicando reglas de retiro diferentes para cada tipo de cuenta.

##Conceptos POO aplicados
- **Encapsulamiento:** Uso de la propiedad privada `#saldo` para proteger los datos financieros, accediendo a ellos mediante los métodos `getSaldo()` y `setSaldo()`.
- **Herencia:** Creación de una clase padre `Cuenta` y dos clases hijas (`Ahorros` y `Corriente`).
- **Polimorfismo:** Implementación del método `retirar()` en ambas clases hijas, modificando su comportamiento.
- **Arreglos:** Uso del arreglo `cuentas` para almacenar los objetos, recorrerlos con `forEach` y validar duplicados con un ciclo `for`.

##Estructura del repositorio
El repositorio está organizado de la siguiente manera:
- `README.md`: Este archivo con la descripción del proyecto y las instrucciones.
- `cuentasbancarias.js`: Archivo fuente que contiene las clases, el arreglo y los casos de prueba (válidos y de error).

## Instrucciones para ejecutar el programa
Para ejecutar el programa, sigue estos pasos:
1. Abrir el archivo `cuentasbancarias.js` en Visual Studio Code.
2. Ubicar el botón de "Play" (el triangulito) en la esquina superior derecha de la ventana.
3. Hacer clic en el botón.
4. Los resultados de las pruebas se mostrarán automáticamente en la consola.

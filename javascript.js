// Función auxiliar para obtener valores de los inputs
function obtenerValores() {
    let num1 = parseFloat(document.getElementById("numero 1").value);
    let num2 = parseFloat(document.getElementById("numero 2").value);
    return { num1, num2 };
}

// Función para mostrar resultado en el h2
function mostrarResultado(valor) {
    document.getElementById("resultado").innerHTML = "Resultado: " + valor;
}

// SUMA
function sumar() {
    let { num1, num2 } = obtenerValores();
    if (isNaN(num1) || isNaN(num2)) {
        mostrarResultado("Error: ingrese números válidos");
        return;
    }
    let suma = num1 + num2;
    mostrarResultado(suma);
}

// RESTA
function restar() {
    let { num1, num2 } = obtenerValores();
    if (isNaN(num1) || isNaN(num2)) {
        mostrarResultado("Error: ingrese números válidos");
        return;
    }
    let resta = num1 - num2;
    mostrarResultado(resta);
}

// MULTIPLICACIÓN
function multiplicar() {
    let { num1, num2 } = obtenerValores();
    if (isNaN(num1) || isNaN(num2)) {
        mostrarResultado("Error: ingrese números válidos");
        return;
    }
    let producto = num1 * num2;
    mostrarResultado(producto);
}

// DIVISIÓN (con manejo de división entre cero)
function dividir() {
    let { num1, num2 } = obtenerValores();
    if (isNaN(num1) || isNaN(num2)) {
        mostrarResultado("Error: ingrese números válidos");
        return;
    }
    if (num2 === 0) {
        mostrarResultado("Error: no se puede dividir entre cero");
        return;
    }
    let division = num1 / num2;
    mostrarResultado(division);
}
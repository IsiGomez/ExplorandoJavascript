function limpiar(){
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';

    document.getElementById('resuSuma').textContent = 'Suma: -';
    document.getElementById('resuResta').textContent = 'Resta: -';
    document.getElementById('resuMulti').textContent = 'Multiplicación: -';
    document.getElementById('resuDivi').textContent = 'División: -';

}

function calcular(){
    const inputNum1 = document.getElementById('num1').value;
    const inputNum2 = document.getElementById('num2').value;

    if (inputNum1.trim() === '' || inputNum2.trim() === '') {
        console.warn("Validación fallida: Campos vacíos.");
        alert("Por favor ingrese ambos números.");
        return;
    }

    const num1 = Number(inputNum1);
    const num2 = Number(inputNum2);
    console.log("Número 1:", num1, "Número 2:", num2);

    if (num1 === num2){
        console.warn("Validación fallida: los números son iguales");
        alert("Ingrese numeros diferentes");
        limpiar();
        return;
    } 
    
    if (num1 === 0 || num2 === 0){
        console.warn("Validación fallida: los números son 0.");
        alert("Ingrese numeros diferentes a 0");
        limpiar();
        return;
    }

    const suma = num1 + num2;
    console.log("Resultado suma:", suma);
    const resta = num1 - num2;
    console.log("Resultado resta:", resta);
    const multi = num1 * num2;
    console.log("Resultado multiplicación:", multi);
    const divi = num2 !== 0 ? (num1 / num2) : "No se puede dividir por 0";
    console.log("Resultado división:", divi);

    document.getElementById('resuSuma').textContent = `Suma: ${suma}`;
    document.getElementById('resuResta').textContent = `Resta: ${resta}`;
    document.getElementById('resuMulti').textContent = `Multiplicación: ${multi}`;
    document.getElementById('resuDivi').textContent = `División: ${divi}`;

}
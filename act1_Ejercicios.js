document.getElementById('btnCalcular').addEventListener('click', function(){
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);

    if (num1 === num2){
        alert("Ingrese numeros diferentes")
    }
    if (num1 === 0 || num2 === 0){
        alert("Ingrese numeros diferentes a 0")
    }

    const suma = num1 + num2;
    const resta = num1 - num2;
    const multi = num1 * num2;
    const divi = num2 !== 0 ? (num1 / num2) : "No se puede dividir por 0";

    document.getElementById('resuSuma').textContent = `Suma: ${suma}`;
    document.getElementById('resuResta').textContent = `Resta: ${resta}`;
    document.getElementById('resuMulti').textContent = `Multiplicación: ${multi}`;
    document.getElementById('resuDivi').textContent = `División: ${divi}`;

})
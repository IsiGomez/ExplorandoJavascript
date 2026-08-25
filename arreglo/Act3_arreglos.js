function generarArreglo() {
    const inputNum = document.getElementById('num').value;

    if (inputNum.trim() === '' || isNaN(inputNum)) {
        console.warn("Validación Invalida: Tipo de dato ingresado Invalido.")
        alert("Ingrese un número valido.");
        return;
    }

    const n = Number(inputNum);

    if (n <= 0) {
        console.warn("Validación Invalida: Número menor o igual a 0.")
        alert("Ingrese número mayor a 0.");
        return;
    }
    
    let arreglo = [1];
    
    for (let i = 1; i < n; i++) {
        arreglo.push(arreglo[i - 1] * 2);
    }
    
    console.info(`Arreglo generado = ${arreglo.join(', ')}`)
    document.getElementById('resuArreglo').textContent = `Arreglo generado: [${arreglo.join(', ')}]`;
}


function obtenerMayor() {
    const arreglo = procesarArreglo();
    if (!arreglo) {
        return;
    }

    const mayor = Math.max(...arreglo)
    document.getElementById('resuMax').textContent = `El numero mayor es: ${mayor}`;
}


function obtenerDiaSemana() {
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    const inputDia = document.getElementById('diaBuscado').value;
    
    if (isNaN(inputDia) || inputDia.trim() === '') {
        alert("Ingrese un número válido para buscar.");
        return;
    }
    
    const diaBuscar = Number(inputDia);

    if (diaBuscar >= 1 && diaBuscar <= 7) {
        document.getElementById('resuDia').textContent = `Dia del número: ${dias[diaBuscar - 1]}`;
        return;
    }
    
    document.getElementById('resuDia').textContent = "Número de día inválido";
}


function buscar() {
    const arreglo = procesarArreglo();
    if (!arreglo) {
        return;
    }

    const inputElem = document.getElementById('numBuscado').value;
    
    if (isNaN(inputElem) || inputElem.trim() === '') {
        alert("Ingrese un número válido para buscar.");
        return;
    }
    
    const elementoBuscado = Number(inputElem);
    const existe = arreglo.includes(elementoBuscado);

    document.getElementById('resuBusqueda').textContent = existe 
        ? `El número ${elementoBuscado} SÍ está en el arreglo.` 
        : `El número ${elementoBuscado} NO se encuentra.`;
}


function ordenarAsc() {
    const arreglo = procesarArreglo();
    if (!arreglo) {
        return;
    }

    const ordenado = arreglo.slice().sort((a, b) => a - b);
    document.getElementById('resuOrden').textContent = `Arreglo ordenado: [${ordenado.join(', ')}]`;
}


function procesarArreglo() {
    const textoInput = document.getElementById('inputArreglo').value;

    if (textoInput.trim() === '') {
        alert("Por favor, ingrese valores separados por coma.");
        return null;
    }

    const arreglo = textoInput.split(',').map(item => Number(item.trim()));

    const hayInvalido = arreglo.some(num => isNaN(num));

    if (hayInvalido) {
        alert("Asegúrese de ingresar solo números válidos separados por coma.");
        return null;
    }

    return arreglo;
}
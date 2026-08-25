function limpiar() {
    document.getElementById('name').value = '';
    document.getElementById('lastnames').value = '';
    document.getElementById('sueldoBase').value = '';
    document.getElementById('rentaAnterior').value = '';
    
    document.getElementById('resuMayuscula').textContent = '';
    document.getElementById('resuAsig').textContent = '';
    document.getElementById('resuPersona').innerHTML = '';

    document.getElementById('tieneCargas').value = 'no';    
    const inputCant = document.getElementById('cantCargas');
    inputCant.value = '0';
    inputCant.disabled = true;
}

function convertirMayuscula() {
    const name = document.getElementById('name').value;
    const lastnames = document.getElementById('lastnames').value;
    
    if (name.trim() === '' || lastnames.trim() === '') {
        console.warn("Nombre y Apellido son ambos obligatorios");
        alert("Por favor rellene los campos necesarios de Nombre y Apellido");
        return;
    }

    if (!isNaN(name) || !isNaN(lastnames)) {
        console.warn("No debe ingresar numeros en ambos campos.");
        alert("Validación Faliida: Ingreso numerico en Nombre y/o Apellido");
        limpiar();
        return;
    }

    document.getElementById('resuMayuscula').textContent = `${name.toUpperCase()} ${lastnames.toUpperCase()}`;
}

function evaluarCargas() {
    const tieneCargas = document.getElementById('tieneCargas').value;
    const inputCant = document.getElementById('cantCargas');

    if (tieneCargas === 'si') {
        inputCant.disabled = false;
    } else {
        inputCant.disabled = true;
        inputCant.value = '0';
    }
}

function obtenerMontoPorCarga(rentaSemestreAnterior) {
    if (rentaSemestreAnterior <= 429899) {
        return 16828;
    } else if (rentaSemestreAnterior <= 627913) {
        return 10327;
    } else if (rentaSemestreAnterior <= 979330) {
        return 3264;
    } else {
        return 0;
    }
}

function calcularTotalCargas(montoPorCarga, cantidadCargas) {
    return montoPorCarga * cantidadCargas;
}

function convertirMayusculaAsig(name, lastnames) {
    return `${name.toUpperCase()} ${lastnames.toUpperCase()}`;
}

function calcularAsignacion() {
    const inputName = document.getElementById('name').value;
    const inputLastnames = document.getElementById('lastnames').value;
    const inputSueldo = document.getElementById('sueldoBase').value;
    const inputRentaAnt = document.getElementById('rentaAnterior').value;
    const tieneCargas = document.getElementById('tieneCargas').value;
    const inputCantCargas = document.getElementById('cantCargas').value;

    if (inputName.trim() === '' || inputLastnames.trim() === '') {
        alert("Por favor ingrese nombre y apellidos válidos.");
        return;
    }

    if (!isNaN(inputName) || !isNaN(inputLastnames)) {
        console.warn("No debe ingresar numeros en ambos campos.");
        alert("Validación Faliida: Ingreso numerico en Nombre y/o Apellido");
        limpiar();
        return;
    }

    if (inputSueldo.trim() === '' || isNaN(inputSueldo) || Number(inputSueldo) < 0) {
        alert("Por favor ingrese un sueldo base válido (mayor o igual a 0).");
        return;
    }

    if (inputRentaAnt.trim() === '' || isNaN(inputRentaAnt) || Number(inputRentaAnt) < 0) {
        alert("Por favor ingrese una renta del semestre anterior válida.");
        return;
    }

    let numCargas = 0;
    if (tieneCargas === 'si') {
        
        if (Number(inputCantCargas) <= 0) {
            alert("Si tiene cargas, debe ingresar una cantidad mayor a 0.");
            return;
        }
        
        numCargas = Number(inputCantCargas);
    }

    const sueldoBase = Number(inputSueldo);
    const rentaAnterior = Number(inputRentaAnt);

    const nombreCompletoUpper = convertirMayusculaAsig(inputName, inputLastnames);
    document.getElementById('resuMayuscula').textContent = `${inputName.toUpperCase()} ${inputLastnames.toUpperCase()}`;
    
    const montoPorCarga = tieneCargas === 'si' ? obtenerMontoPorCarga(rentaAnterior) : 0;
    const totalCargas = calcularTotalCargas(montoPorCarga, numCargas);
    const sueldoFinal = sueldoBase + totalCargas;

    document.getElementById('resuAsig').textContent = (`Al Trabajador ${nombreCompletoUpper} le corresponde 
        valor de familiar $${montoPorCarga} por su renta del semestre anterior que es: $${rentaAnterior}`)

    const persona = {
        name: inputName.toUpperCase(),
        lastnames: inputLastnames.toUpperCase(),
        cargas: tieneCargas,
        cantidadCargas: numCargas,
        ingresoSemestreAnterior: rentaAnterior,
        montoPorCarga: montoPorCarga,
        montoTotalCargaFamiliar: totalCargas,
        sueldoMesMasCargas: sueldoFinal
    };

    console.info("Objeto Persona Creado:", persona);
    console.log("La persona de:");
    console.log(`Nombre: ${persona.name}`);
    console.log(`Apellidos: ${persona.lastnames}`);
    console.log(`Cargas (si/no): ${persona.cargas}`);
    console.log(`Cantidad de Cargas familiares: ${persona.cantidadCargas}`);
    console.log(`Está en el tramo que corresponde al ingreso del semestre anterior: $${persona.ingresoSemestreAnterior}`);
    console.log(`Le corresponde por carga familiar el monto: $${persona.montoPorCarga}`);
    console.log(`Le corresponde el monto total de carga familiar de: $${persona.montoTotalCargaFamiliar}`);
    console.log(`Su sueldo del mes más las cargas familiares es de: $${persona.sueldoMesMasCargas}`);

    document.getElementById('resuPersona').innerHTML = `
        <p><strong>Nombre completo:</strong> ${nombreCompletoUpper}</p>
        <p><strong>Cargas (sí/no):</strong> ${persona.cargas}</p>
        <p><strong>Cantidad de Cargas:</strong> ${persona.cantidadCargas}</p>
        <p><strong>Renta semestre anterior:</strong> $${persona.ingresoSemestreAnterior.toLocaleString('es-CL')}</p>
        <p><strong>Monto por carga familiar:</strong> $${persona.montoPorCarga.toLocaleString('es-CL')}</p>
        <p><strong>Monto total carga familiar:</strong> $${persona.montoTotalCargaFamiliar.toLocaleString('es-CL')}</p>
        <p><strong>Sueldo final del mes (con cargas):</strong> $${persona.sueldoMesMasCargas.toLocaleString('es-CL')}</p>
    `;
}
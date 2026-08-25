function limpiar(){
    document.getElementById('edad').value = '';

    document.getElementById('resuEdad').textContent = '';
}

function calcular(){
    const inputEdad = document.getElementById('edad').value;
    
    console.log("Edad Ingresada:", inputEdad);

    if (inputEdad.trim() === '' || isNaN(inputEdad)) {
        console.warn("Validación fallida: El dato ingresado no es un número valido");
        alert("Ingrese un número valido");
        limpiar();
        return;
    }

    const edad = Number(inputEdad);

    if (edad <= 0) {
        console.warn("Validación fallida: La edad es menor o igual a 0.");
        alert("Ingrese una edad mayor a 0");
        limpiar();
        return;
    } else if (edad >= 200) {
        console.warn("Validación fallida: Edad Invalida");
        alert("No puedes tener mas de 200 años");
        limpiar();
        return;
    }

    let mensaje = "";

    if (edad < 18) {
        mensaje = "Persona menor de edad";
    } else if (edad < 65) {
        mensaje = "Persona es adulto";
    } else if (edad < 85) {
        mensaje = "Persona es adulto mayor";
    } else {
        mensaje = "Persona es de años dorados";
    }

    console.log("Resultado edad:", mensaje);

    document.getElementById('resuEdad').textContent = mensaje;

}
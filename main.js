const radio = parseFloat(prompt("Introduce el radio de la esfera:"));


if (isNaN(radio) || radio <= 0) {
    alert("Por favor, introduce un número válido para el radio.");
} 
else {
   
    const PI = Math.PI;
    const volumen = (4 / 3) * PI * Math.pow(radio, 3);

    const formula = "(4/3) * PI * radio^3";
    const mensaje = `El volumen de la esfera se calcula con la fórmula ${formula}, por tanto una esfera de radio ${radio} tiene un volumen de ${volumen.toFixed(2)}.`;
    
    alert(mensaje);
}

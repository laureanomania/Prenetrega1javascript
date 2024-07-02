alert("Bienvenidos a nuestra Barberia");
let nombre = prompt("Por favor, ingresa tu nombre:");
let mensajeSaludo = "¡Hola, " + nombre + "! Bienvenido.";
alert(mensajeSaludo);
let edad = Number(prompt("Por favor, ingresa tu edad:"));
edad = Number(edad);
if (edad >= 18) {
  alert("Eres mayor de edad.");
} else {
  alert("Eres menor de edad y necesitas la compañía de un adulto.");
}

let precioBase = 7000;

let precioTotal = precioBase;

let seguirAgregando = true;

while (seguirAgregando) {
  let opcion = prompt(
    `Elige una opción adicional:\n\n1. Barba(+$1000)\n2. Cejas (+$650)\n3. Teñido (+$2000)\n4. Lavado (+$600)\n\nPara finalizar, escribe "fin".`
  );

  if (opcion.toLowerCase() === "fin") {
    seguirAgregando = false;
  } else {
    opcion = parseInt(opcion);

    switch (opcion) {
      case 1:
        precioTotal += 1000;
        alert("Has agregado Barba (+$1000).");
        break;
      case 2:
        precioTotal += 650;
        alert("Has agregado Cejas (+$650).");
        break;
      case 3:
        precioTotal += 2000;
        alert("Has agregado Teñido (+$2000).");
        break;
      case 4:
        precioTotal += 600;
        alert("Has agregado Lavado (+$600).");
        break;
      default:
        alert("Opción no válida. Por favor, elige una opción válida.");
    }
  }
}

alert(`El precio total del servicio de uñas es: $${precioTotal}`);

alert("Gracias por elegirnos");

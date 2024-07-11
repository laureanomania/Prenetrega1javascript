function solicitarNombre() {
  return prompt("Bienvenido. Por favor, ingresa tu nombre.");
}

function mostrarPrecioBase() {
  const precioBase = 7000;
  alert(`El Valor de nuestro servicio es : $${precioBase}`);
  return precioBase;
}

function seleccionarOpciones(precioBase) {
  let precioTotal = precioBase;
  let agregarMas = true;

  while (agregarMas) {
    let opcion = confirm(
      `Te interesaria agregar alguno de nuestros servicios adicionales ?\n\nPrecio total actual: $${precioTotal}`
    );

    if (opcion) {
      let opcionElegida = prompt(
        `Por favor elige uno de nuestros Servicios adicionales:\n\n1. Barba (+$1000)\n2. Cejas (+$650)\n3. Teñido (+$2000)\n4. Lavado (+$600)\n\nPara finalizar, escribe "fin".`
      );

      switch (opcionElegida) {
        case "1":
          precioTotal += 1000;
          alert("Has agregado Barba (+$1000).");
          break;
        case "2":
          precioTotal += 650;
          alert("Has agregado Cejas (+$650).");
          break;
        case "3":
          precioTotal += 2000;
          alert("Has agregado Teñido (+$2000).");
          break;
        case "4":
          precioTotal += 600;
          alert("Has agregado Lavado (+$600).");
          break;
        case "fin":
          agregarMas = false;
          break;
        default:
          alert("Opción no válida. Por favor, elige una opción válida.");
      }
    } else {
      agregarMas = false;
    }
  }

  return precioTotal;
}
function ejecutarPrograma() {
  let nombre = solicitarNombre();
  alert(`¡Hola, ${nombre}! Bienvenido.`);
  let precioBase = mostrarPrecioBase();
  let precioFinal = seleccionarOpciones(precioBase);
  alert(`El precio total a pagar es: $${precioFinal}`);
  alert(`!Gracias por elejirnos , ${nombre}!`);
}
ejecutarPrograma();

const solicitarNombre = () => {
  return prompt("Bienvenido. Por favor, ingresa tu nombre.");
};

const mostrarPrecioBase = () => {
  const precioBase = 7000;
  alert(`El Valor de nuestro trabajo es : $${precioBase}`);
  return precioBase;
};

const seleccionarOpciones = (precioBase) => {
  let precioTotal = precioBase;
  let agregarMas = true;

  let opcion = confirm(
    `Te interesaría agregar alguno de nuestros Servicios adicionales ?\n\nPrecio total actual: $${precioTotal}`
  );

  if (opcion === false) {
    return precioTotal;
  }

  while (agregarMas) {
    let opcionElegida = prompt(
      `Por favor elige uno de nuestros Servicios adicionales:\n\n1. Barba (+$1000)\n2. Cejas (+$650)\n3. Teñido (+$2000)\n4. Lavado (+$600) \n\nPara finalizar, escribe "no". `
    );

    if (opcionElegida === null) {
      break;
    }

    switch (opcionElegida) {
      case "1":
        precioTotal += 1000;
        alert(
          `Has agregado Barba (+$1000).\nPrecio total actual: $${precioTotal}`
        );
        break;
      case "2":
        precioTotal += 650;
        alert(
          `Has agregado Cejas (+$650).\nPrecio total actual: $${precioTotal}`
        );
        break;
      case "3":
        precioTotal += 2000;
        alert(
          `Has agregado Teñido (+$2000).\nPrecio total actual: $${precioTotal}`
        );
        break;
      case "4":
        precioTotal += 600;
        alert(
          `Has agregado Lavado (+$600).\nPrecio total actual: $${precioTotal}`
        );
        break;
      case "no":
        agregarMas = false;
        break;
      default:
        alert("Opción no válida. Por favor, elige una opción válida.");
    }
  }

  return precioTotal;
};

const ejecutarPrograma = () => {
  let nombre = solicitarNombre();
  alert(`¡Hola, ${nombre}! Bienvenido.`);
  let precioBase = mostrarPrecioBase();
  let precioFinal = seleccionarOpciones(precioBase);

  alert(`El precio total a pagar es: $${precioFinal}`);
  alert(`¡Gracias por elegirnos, ${nombre}!`);
};

ejecutarPrograma();

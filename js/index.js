// CREAMOS LOS PRODUCTOS EN UN ARRAY
const productos = [
  //utiles
  {
    nombre: "Lapiceras BIC",
    imagen: "assets/productos/packLapicerasBicAzules.png",
    descripcion: "Pack x unidades de lapiceras bic azules.",
    precio: 450,
    cantidad: 1,
  },
  {
    nombre: "Lapiceras BIC de colores",
    imagen: "assets/productos/packLapicerasBic.png",
    descripcion: "Pack x3 unidades de lapiceras bic de colores.",
    precio: 500,
    cantidad: 1,
  },
  {
    nombre: "Lapices negros BIC",
    imagen: "assets/productos/packLapicesNegros.jpg",
    descripcion: "Pack de X3 unidades de lapices negros BIC.",
    precio: 450,
    cantidad: 1,
  },
  {
    nombre: "Lapices de colores",
    imagen: "assets/productos/packLapicesColores.jpeg",
    descripcion: "Pack de Lapices de colores Faber Castell.",
    precio: 4500,
    cantidad: 1,
  },
  {
    nombre: "Goma de borrar",
    imagen: "assets/productos/gomaBorrar.jpg",
    descripcion: "Goma de borrar Mapped.",
    precio: 250,
    cantidad: 1,
  },
  {
    nombre: "Pluma de escribir",
    imagen: "assets/productos/pluma.jpg",
    descripcion: "Pluma de escribir - Incluye repuesto de cartuchos.",
    precio: 1600,
    cantidad: 1,
  },
  // CARPETAS Y LIBROS
  {
    nombre: "Carpeta A4",
    imagen: "assets/productos/carpetas.jpg",
    descripcion: "Carpetas A4 de colores pastel.",
    precio: 600,
    cantidad: 1,
  },
  {
    nombre: "Cuadernos Oficio",
    imagen: "assets/productos/cuadernosOficio.jpg",
    descripcion: "Cuadernos rayados o cuadriculados tamaño Oficio.",
    precio: 750,
    cantidad: 1,
  },
  {
    nombre: "Repuesto de hojas A4",
    imagen: "assets/productos/Repuesto_Exito.jpg",
    descripcion: "Respuesto de 480hojas A4 cuadriculadas o rayadas.",
    precio: 4500,
    cantidad: 1,
  },
  // REGLAS Y MEDICIÓN
  {
    nombre: "Kit reglas",
    imagen: "assets/productos/kitreglas.jpg",
    descripcion: "Kit de reglas Maped compuesto de regla 30cm, transportador y escuadra.",
    precio: 1000,
    cantidad: 1,
  },
  {
    nombre: "Compás",
    imagen: "assets/productos/compasMaped.png",
    descripcion: "Compas de plástico Mapped - Incluye minas de repuesto.",
    precio: 1200,
    cantidad: 1,
  },
  // INFANCIAS Y PRIMARIA
  {
    nombre: "Crayones de colores",
    imagen: "assets/productos/cayonesFilgo.jpg",
    descripcion:"Crayones Filgo colores x12 unidades.",
    precio: 600,
    cantidad: 1,
  },
  {
    nombre: "Plastilina",
    imagen: "assets/productos/Plastilina.jpg",
    descripcion: "Plastilina de colores x6 unidades.",
    precio: 750,
    cantidad: 1,
  },
  {
    nombre: "Papel glacé",
    imagen: "assets/productos/PackPapelGlace.png",
    descripcion: "Pack papel glacé de colores x16 unidades.",
    precio: 750,
    cantidad: 1,
  },
  // TECNOLOGÍA Y MAS
  {
    nombre: "Calculadora básica",
    imagen: "assets/productos/calculadoraPrintaform.jpg",
    descripcion: "Calculadora Printaform ideal para primaria y operaciones simples.",
    precio: 2500,
    cantidad: 1,
  },
  {
    nombre: "Calculadora científica",
    imagen: "assets/productos/CalculadoraCasio.jpg",
    descripcion: "Calculadora Casio científica.",
    precio: 52000,
    cantidad: 1,
  },
  {
    nombre: "USB Kingstone",
    imagen: "assets/productos/USBKinngstone.jpg",
    descripcion: "USB Kingstone de 64GB.",
    precio: 750,
    cantidad: 1,
  },
  // INDUMENTARIA
  {
    nombre: "Guardapolvo mujer",
    imagen: "assets/productos/guardapolvoMujer.jpg",
    descripcion: "Guardapolvo de mujer talle pequeño.",
    precio: 2500,
    cantidad: 1,
  },
  {
    nombre: "Guardapolvo hombre",
    imagen: "assets/productos/guardapolvoHombre.jpg",
    descripcion: "Guardapolvo de hombre talle pequeño.",
    precio: 2500,
    cantidad: 1,
  },
  {
    nombre: "Jogging azúl",
    imagen: "assets/productos/jogginNinio.webp",
    descripcion: "Jogging azul oscuro unisex yipo uniforme escolar talle pequeño.",
    precio: 1500,
    cantidad: 1,
  }

]
//***************************** EL CARRITO *******************************
const carrito = [];

// Función que se encargue de buscar si un producto existe en nuestro carrito
function enCarrito(nombrePrompt) {
  return carrito.find((producto) => producto.nombre == nombrePrompt);
}

//******************** BUSCAR ************************/
//seleccionamos el elemento del HTML
const inputBuscador = document.querySelector("#buscador");
const buscadorResultados = document.querySelector("#resultados");

//BUSCADOR Cada vez que se actualice el input se dispararia este evento!
inputBuscador.addEventListener("input", function(){
  const valorBuscado = inputBuscador.value.toLocaleLowerCase();
  const resultados = productos.filter((item) => item.nombre.toLocaleLowerCase().includes(valorBuscado));

  actualizarHTML(resultados);
});

//NOS ACTUALIZA EL HTML Y MUESTRA EL RESULTADO EN EL #RESULTADOS
function actualizarHTML(resultados) {
  buscadorResultados.innerHTML = " ";

  for (const item of resultados) {
    buscadorResultados.innerHTML += `
    <ul>
      <li><p>${item.nombre}</p></li>
    </ul>
    `;
  }
}

//******************** AGREGAR ************************/
// Función para agregar un producto al carrito
function agregarCarrito() {
  // Pido por prompt los datos del producto
  let nombrePrompt = prompt("Ingresar el producto").toLowerCase().trim();
  while (nombrePrompt.length == 0) {
    nombrePrompt = prompt("!Error! \n Dato obligatorio \n Ingresar el nombre producto").toLowerCase().trim();
  }
  let precioPrompt = parseFloat(prompt("Ingresar el precio"));
  while (
    precioPrompt <= 0 || precioPrompt.length === 0 || typeof precioPrompt != "number" || isNaN(precioPrompt)
  ) { precioPrompt = parseFloat(prompt("!Error! \n Dato obligatorio \n Ingresar solo números"));
  }

  // Creo un objeto con los datos obtenidos del prompt
  const nuevoProducto = {
    nombre: nombrePrompt,
    precio: parseInt(precioPrompt),
    subtotal: parseInt(precioPrompt),
    cantidad: 1,
  };

  const productoEncontrado = enCarrito(nombrePrompt);

  if (productoEncontrado) {
    productoEncontrado.cantidad++;
    productoEncontrado.precio = parseInt(precioPrompt);
    productoEncontrado.subtotal =
      parseInt(precioPrompt) * productoEncontrado.cantidad;
  } else {
    // Push agrega el producto en el array
    carrito.push(nuevoProducto);
  }

  // Mensaje de alert exitoso
  alert("El producto " + nombrePrompt + " fue agregado con éxito.");
  listaCarrito();
}

/***************** LISTA ******************/
function listaCarrito() {
  console.clear();
  console.log("Productos que hay en el carrito:");

  // Recorremos los elementos del array carrito
  carrito.forEach((producto) => {
    console.log("----------");
    console.log("Nombre:", producto.nombre);
    console.log("Precio:", producto.precio);
    console.log("Cantidad:", producto.cantidad);
    console.log("Subtotal:", producto.subtotal);
  });

  //para saber el total hasta ahora
  const totalCarrito = carrito.reduce((acu, el) => acu + el.subtotal, 0);
  console.log("TOTAL A ABONAR: $", totalCarrito);
}

/****************** ELIMINAR *****************/
function quitarCarrito() {
  const nombrePrompt = prompt("¿Qué producto desea eliminar?");

  const productoEncontrado = enCarrito(nombrePrompt);

  if (productoEncontrado) {
    const indiceProducto = carrito.indexOf(productoEncontrado);
    // Una vez obtenemos el índice, lo volamos con splice
    carrito.splice(indiceProducto, 1);
    // Mostramos un mensaje al usuario que se ha borrado el producto del carrito
    alert(
      "El producto " + productoEncontrado.nombre + " fue borrado con éxito."
    );
    listar();
  } else {
    alert(
      "No se encontró el producto " +
        nombrePrompt +
        " en el carrito. Vuelva a seleccionarlo."
    );
  }
}

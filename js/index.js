
//***************************** EL CARRITO *******************************
const carrito = [];

// Función que se encargue de buscar si un producto existe en nuestro carrito
function enCarrito(nombrePrompt) {
  return carrito.find((producto) => producto.nombre == nombrePrompt);
}

//******************** BUSCAR ************************/
function buscar() {
  const keyword = prompt("¿Qué producto desea buscar?");

  const arrayResultados = carrito.filter((el) =>
    el.nombre.toLowerCase().includes(keyword.toLowerCase())
  );
  console.log(arrayResultados);
}

//******************** AGREGAR ************************/
// Función para agregar un producto al carrito
function agregarCarrito() {
  // Pido por prompt los datos del producto
  const nombrePrompt = prompt("Introduzca el nombre del producto:");
  const precioPrompt = prompt("Introduzca el precio del producto:");

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
    productoEncontrado.subtotal = parseInt(precioPrompt) * productoEncontrado.cantidad;
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
    alert("El producto " + productoEncontrado.nombre + " fue borrado con éxito.");
    listar();
  } else {
    alert("No se encontró el producto " + nombrePrompt + " en el carrito. Vuelva a seleccionarlo.");
  }
}
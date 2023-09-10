
//***************************** EL CARRITO *******************************
const carrito = [];

// Función que se encargue de buscar si un producto existe en nuestro carrito (array)
function enCarrito(nombrePrompt) {
  // Find: busca un elemento que cumpla la condición (en este caso el nombre del
  // del producto con el nombre introducido en el prompt) y devuelve el elemento
  // o undefined si no lo encuentra
  return carrito.find((producto) => producto.nombre == nombrePrompt);
}

function buscar() {
  const keyword = prompt("¿Qué producto desea buscar?");

  const arrayResultados = carrito.filter((el) =>
    el.nombre.toLowerCase().includes(keyword.toLowerCase())
  );
  console.log(arrayResultados);
}

// Función para agregar un producto al carrito
function agregarCarrito() {
  // Pido por prompt los datos del producto
  const nombrePrompt = prompt("Introduzca el nombre del producto:");
  const precioPrompt = prompt("Introduzca el precio del producto:");

  // Creo un objeto con los datos obtenidos del prompt
  const nuevoProducto = {
    nombre: nombrePrompt,
    precio: parseInt(precioPrompt),
    cantidad: 1,
  };

  const productoEncontrado = enCarrito(nombrePrompt);

  if (productoEncontrado) {
    productoEncontrado.cantidad++;
    productoEncontrado.precio = productoEncontrado.precio * productoEncontrado.cantidad;
  } else {
    // Push agrega el producto en el array
    carrito.push(nuevoProducto);
  }

  // Mensaje de alert exitoso
  alert("El producto " + nombrePrompt + " fue agregado con éxito.");
  listar();
}

function listaCarrito() {
  console.clear();
  console.log("Productos que hay en el carrito:");

  // Recorremos los elementos del array carrito
  carrito.forEach((producto) => {
    console.log("----------");
    console.log("Nombre:", producto.nombre);
    console.log("Precio:", producto.precio);
    console.log("Cantidad:", producto.cantidad);
  });

  //para saber el total hasta ahora
  const totalCarrito = carrito.reduce((acu, el) => acu + el.precio, 0);
  console.log("TOTAL A ABONAR: $", totalCarrito);
}

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
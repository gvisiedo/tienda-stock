const listaProductos = document.querySelector('#productos');

// Mostrar lista de productos en el div#productos
export function mostrarProductos(productos) {
    productos.forEach(function(producto){
        const div = document.createElement('div')
        div.innerHTML=`
        <p>Nombre: ${producto.nombre}</p>
        <p>Precio: ${producto.precio}</p>
        <p>Cantidad: ${producto.cantidad}</p>
        <p>En Stock: ${producto.enStock ?'Si': 'No'}</p>

        `
        listaProductos.appendChild(div)
    })
  }

// Mostrar u ocultar el formulario según el rol
export function mostrarFormulario(esAdmin) {
    const formulario = document.querySelector('#formProducto')
    formulario.style.display = esAdmin ? 'block': 'none'
        
 }

// Mostrar mensaje de error
export function mostrarError(mensaje) {
   const error = document.querySelector('#error')
   error.textContent= mensaje
}
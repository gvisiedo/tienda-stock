import { mostrarProductos, mostrarFormulario, mostrarError } from './ui.js'
import { getProductos, crearProducto } from './api.js'

const token = localStorage.getItem('token')

const btnCrear = document.querySelector('#btnCrear')


    function getRol(token) {
  const payload = JSON.parse(atob(token.split('.')[1]))
  return payload.rol
    }
    
    const esAdmin = token ? getRol(token) === 'admin':false
    mostrarFormulario(esAdmin)       
 


async function iniciar(){
    const productos = await getProductos()
    mostrarProductos(productos)

}
iniciar()

btnCrear.addEventListener('click', async function(){
    const nombre = document.querySelector('#inputNombre').value
    const precio = document.querySelector('#inputPrecio').value
    const cantidad = document.querySelector('#inputCantidad').value
    const datos = { nombre: nombre, precio: Number(precio), cantidad: Number(cantidad) }
    const resultado = await crearProducto(datos, token)
    if(resultado && !resultado.error){
        const productos = await getProductos()
        mostrarProductos(productos)
    }
})

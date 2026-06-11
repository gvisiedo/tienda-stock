import { mostrarProductos, mostrarFormulario, mostrarError } from './ui.js'
import { getProductos, crearProducto } from './api.js'

const token = localStorage.getItem('token')

if(!token){
    const formulario = document.querySelector('#formProducto')
    formulario.style.display = 'none'
}

if(token){
    function getRol(token) {
  const payload = JSON.parse(atob(token.split('.')[1]))
  return payload.rol
    }
    
    const esAdmin = token ? getRol(token) === 'admin':false
    mostrarFormulario(esAdmin)       
 
}
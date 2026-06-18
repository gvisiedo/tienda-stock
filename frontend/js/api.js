// Login
export async function login(email, password) {
    try {
    const respuesta = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password })
    })
    const datos = await respuesta.json()
    return datos  
    } catch (error) {
       return null
    }
 }

// Obtener productos
export async function getProductos() {
     try {
    const respuesta = await fetch('http://localhost:3000/productos', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      
    })
    const datos = await respuesta.json()
    return datos
}catch(error){
    return null
}
}

// Crear producto
export async function crearProducto(datos, token) {
    try {
    const respuesta = await fetch('http://localhost:3000/productos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json','authorization':`Bearer ${token}` },
      body: JSON.stringify(datos)
    })
    const resultado = await respuesta.json()
    return resultado
  } catch(error) {
    return null
  }
}
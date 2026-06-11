import { login } from "./api.js";


// Botón login → redirige a login.html
// (esto está en index.html)
const btnLogin = document.querySelector('#btnLogin')
if(btnLogin) {
  btnLogin.addEventListener('click', function() {
    window.location.href = './login.html' 
  })
}

// Formulario login → llama a la API
// (esto está en login.html)
const btnIniciarSesion = document.querySelector('#btnLogin')  
    if(btnIniciarSesion){
        btnIniciarSesion.addEventListener('click',async function(){
         const email = document.querySelector('#email').value
         const password = document.querySelector('#password').value
         
         const datos = await login(email, password)
         if(!datos || datos.error){
            document.querySelector('#error').textContent=datos.error
            return
         }
            
            localStorage.setItem('token', datos.token)
            window.location.href = './index.html'
        })
    }

// Botón logout → elimina el token
const btnCerrarSesion = document.querySelector('#btnLogout')
if(btnCerrarSesion){
    btnCerrarSesion.addEventListener('click', function(){
        localStorage.removeItem('token')
        window.location.href= './login.html'
    })
}
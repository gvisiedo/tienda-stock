
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log('Conectado a MongoDB'))
.catch(error => console.log('Error de conexión:', error))

//Rutas
const authRoutes = require('./routes/auth')
app.use('/auth', authRoutes)

const productosRoutes = require('./routes/productos')
app.use('/productos', productosRoutes)

app.listen(3000, function(){
    console.log('Servidor corriendo en http://localhost:3000')
})

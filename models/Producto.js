const mongoose = require('mongoose')

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  cantidad: { type: Number, required:true, default: 0 },
  enStock:{type: Boolean, default: false}
})

productoSchema.pre('save', function(next){
    this.enStock = this.cantidad > 0
    next()
})

const Producto = mongoose.model('Producto', productoSchema)
module.exports = Producto
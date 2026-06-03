
const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/auth')
const Producto = require('../models/Producto')
const esAdmin = require('../middleware/esAdmin')

router.get('/', async function(req,res){
    try {
        const productos = await Producto.find()
        res.json(productos)
        
    } catch (error) {
        res.status(500).json({error:'Producto no encontrado'})
        
    }
})
router.get('/:id', async function(req,res){
    try {
        const productos = await Producto.findById(req.params.id)
        if(!productos){
            res.status(404).json({error: 'Producto no encontrado'})
            return
        }
        res.json(productos)
    } catch (error) {
        res.status(500).json({error:'Producto no encontrado'})
    }

})
router.post('/', authMiddleware, esAdmin, async function(req,res){
    try {
      const datos = req.body
      datos.enStock = datos.cantidad >0
        const productos = new Producto(datos)
        await productos.save()
        res.json(productos)
    } catch (error) {
      console.log(error)
        res.status(500).json({error: 'Error al crear producto'})
    }
})
router.put('/:id', authMiddleware, esAdmin, async function(req,res){
      try {
        if(req.body.cantidad !== undefined) {
  req.body.enStock = req.body.cantidad > 0
}
    const productos = await Producto.findByIdAndUpdate(req.params.id, req.body,{new:true})
    if(!productos){
      res.status(404).json({error: 'Producto no encontrado'})
      return
    }
    res.json(productos)
    
  } catch (error) {
    res.status(500).json({error: 'Error al obtener el producto'})
    
  }
})
router.delete('/:id', authMiddleware, esAdmin, async function(req,res){
      try {
    const productos = await Producto.findByIdAndDelete(req.params.id)
    if(!productos){
      res.status(404).json({error: 'Producto no encontrado'})
      return
    }
    res.json(productos)
  } catch (error) {
    res.status(500).json({error: 'Error al obtener el producto'})
    
  }
})

module.exports = router

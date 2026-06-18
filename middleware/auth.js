const jwt = require('jsonwebtoken')

module.exports = function (req, res, next){
    // 1.leer el token del header
    const authHeader = req.headers.authorization
    
    //2 si no hay token, rechazar
    if(!authHeader){
        return res.status(401).json({error: 'Acceso denegado'})
    }
    const token = authHeader.startsWith('Bearer') ? authHeader.slice(7) : authHeader
    //3 Verificar el token
    try {
        const verificado = jwt.verify(token, process.env.SECRET_KEY)
        req.usuario = verificado // añade los datos del usuario a la petición
        next()
    } catch (error) {
        res.status(401).json({error: 'Token inválido'})
    }
}
const jwt = require('jsonwebtoken')

module.exports = function (req, res, next){
    // 1.leer el token del header
    const token = req.headers.authorization

    //2 si no hay token, rechazar
    if(!token){
        return res.status(401).json({error: 'Acceso denegado'})
    }
    //3 Verificar el token
    try {
        const verificado = jwt.verify(token, process.env.SECRET_KEY)
        req.usuario = verificado // añade los datos del usuario a la petición
        next()
    } catch (error) {
        res.status(401).json({error: 'Token inválido'})
    }
}
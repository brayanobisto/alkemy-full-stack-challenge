const { body } = require('express-validator')
const jwt = require('jsonwebtoken')

const errorHandler = require('./errorHandler')

module.exports = {
  validateBody: [
    body('email')
      .notEmpty()
      .withMessage('El email es requerido')
      .isEmail()
      .withMessage('El email debe ser valido')
      .normalizeEmail(),

    body('password')
      .notEmpty()
      .withMessage('El password es requerido')
      .isStrongPassword()
      .withMessage('El password debe tener al menos 8 caracteres, 1 mayúscula, 1 minúscula, 1 número y un símbolo'),

    errorHandler,
  ],

  verifyToken: (req, res, next) => {
    let token = req.headers?.authorization || ''

    if (token === '') return res.status(403).json({ errors: [{ message: 'No se ha enviado el token' }] })

    token = token.substring(7)

    try {
      const decodedData = jwt.verify(token, process.env.JWT_SECRET)

      req.user = decodedData

      next()
    } catch (error) {
      res.status(401).json({ errors: [{ message: 'Token inválido' }] })
    }
  },
}

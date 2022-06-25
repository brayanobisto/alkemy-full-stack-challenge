const { body } = require('express-validator')

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
}

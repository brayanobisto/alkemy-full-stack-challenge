const { body } = require('express-validator')

const { CATEGORIES } = require('../constants')
const errorHandler = require('./errorHandler')

module.exports = {
  validateBody: (isUpdating = false) => {
    const validations = [
      body('concept').trim().notEmpty().withMessage('El concepto no puede estar vacío').optional({ nullable: true }),

      body('amount')
        .trim()
        .notEmpty()
        .withMessage('La cantidad es requerida')
        .isNumeric()
        .withMessage('La cantidad debe ser un numero')
        .isFloat({ min: 1 })
        .withMessage('La cantidad debe ser mayor a 0'),

      body('date')
        .notEmpty()
        .withMessage('La fecha es requerida')
        .isDate({ delimiters: ['/', '-', ' '] })
        .withMessage('La fecha debe ser una fecha valida'),

      body('category')
        .isIn(CATEGORIES)
        .withMessage(`La categoría debe ser una de las siguientes: ${CATEGORIES.join(', ')}`)
        .optional(),
    ]

    !isUpdating &&
      validations.push(
        body('type')
          .notEmpty()
          .withMessage('El tipo es requerido')
          .isIn(['ingreso', 'egreso'])
          .withMessage('El tipo debe ser ingreso o egreso')
      )

    validations.push(errorHandler)

    return validations
  },
}

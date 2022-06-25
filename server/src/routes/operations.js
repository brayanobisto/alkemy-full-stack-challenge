const { Router } = require('express')
const router = Router()

const { body } = require('express-validator')

const operationsController = require('../controllers/operations')
const { CATEGORIES } = require('../constants')

router.get('/', operationsController.getAllOperations)
router.post(
  '/',
  body('concept').notEmpty().withMessage('El concepto no puede estar vacío').optional({ nullable: true }),
  body('amount')
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
  body('type')
    .notEmpty()
    .withMessage('El tipo es requerido')
    .isIn(['ingreso', 'egreso'])
    .withMessage('El tipo debe ser ingreso o egreso'),
  body('category')
    .notEmpty()
    .withMessage('La categoria es requerida')
    .isIn(CATEGORIES)
    .withMessage(`La categoría debe ser una de las siguientes: ${CATEGORIES.join(', ')}`),
  operationsController.createOperation
)

module.exports = router

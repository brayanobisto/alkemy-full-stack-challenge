const { Router } = require('express')
const router = Router()

const operationsController = require('../controllers/operations')
const { verifyToken } = require('../middlewares/auth')
const { validateBody } = require('../middlewares/operations')

router.get('/', verifyToken, operationsController.getAllOperations)

router.post('/', verifyToken, validateBody(), operationsController.createOperation)

router.put('/:id', verifyToken, validateBody(true), operationsController.updateOperation)

router.delete('/:id', verifyToken, operationsController.deleteOperation)

module.exports = router

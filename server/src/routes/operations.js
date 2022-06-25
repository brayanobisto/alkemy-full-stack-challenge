const { Router } = require('express')
const router = Router()

const operationsController = require('../controllers/operations')
const { validateBody } = require('../middlewares/operation')

router.get('/', operationsController.getAllOperations)

router.post('/', validateBody(), operationsController.createOperation)

router.put('/:id', validateBody(true), operationsController.updateOperation)

router.delete('/:id', operationsController.deleteOperation)

module.exports = router

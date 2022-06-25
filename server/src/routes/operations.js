const { Router } = require('express')
const router = Router()

const operationsController = require('../controllers/operations')

router.get('/', operationsController.getAllOperations)

module.exports = router

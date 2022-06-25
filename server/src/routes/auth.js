const { Router } = require('express')
const router = Router()

const authController = require('../controllers/auth')
const { validateBody } = require('../middlewares/auth')

router.post('/register', validateBody, authController.register)

router.post('/login', validateBody, authController.login)

module.exports = router

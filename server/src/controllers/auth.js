const jwt = require('jsonwebtoken')

const { User } = require('../db.js')
const { hashPassword, checkPassword } = require('../utils/auth')

module.exports = {
  register: async (req, res, next) => {
    try {
      const { email, password } = req.body
      const hashedPassword = await hashPassword(password)

      let [user, created] = await User.findOrCreate({
        where: {
          email,
        },
        defaults: {
          password: hashedPassword,
        },
      })

      if (!created) return res.status(409).json({ errors: [{ msg: 'El usuario ya existe', param: 'email' }] })

      const token = jwt.sign({ userId: user.id, email }, process.env.JWT_SECRET)
      user = user.toJSON()
      delete user.password
      user.token = token

      res.status(201).json(user)
    } catch (error) {
      next(error)
    }
  },

  login: async (req, res, next) => {
    try {
      const { email, password } = req.body
      let user = await User.findOne({ where: { email } })

      if (user === null || !(await checkPassword(password, user?.password))) {
        return res.status(401).json({ errors: [{ msg: 'Usuario o contraseña incorrectos' }] })
      }

      const token = jwt.sign({ userId: user.id, email }, process.env.JWT_SECRET)
      user = user.toJSON()
      delete user.password
      user.token = token

      res.status(201).json(user)
    } catch (error) {
      next(error)
    }
  },
}

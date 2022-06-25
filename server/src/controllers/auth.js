const jwt = require('jsonwebtoken')

const { User } = require('../db.js')
const { hashPassword } = require('../utils/auth')

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

      if (!created) return res.status(409).json({ errors: [{ msg: 'El usuario ya existe' }] })

      const token = jwt.sign({ userId: user.id, email }, process.env.TOKEN_SECRET)
      user = user.toJSON()
      delete user.password
      user.token = token

      res.status(201).json(user)
    } catch (error) {
      next(error)
    }
  },

  login: async (req, res, next) => {},
}

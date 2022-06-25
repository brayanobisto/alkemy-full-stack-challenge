const crypto = require('crypto')
const { promisify } = require('util')

const scrypt = promisify(crypto.scrypt)

module.exports = {
  hashPassword: async password => {
    // generate random 16 bytes long salt
    const salt = crypto.randomBytes(16).toString('hex')
    const derivedKey = await scrypt(password, salt, 64)

    return `${salt}:${derivedKey.toString('hex')}`
  },

  checkPassword: async (password, hashedPassword) => {
    const [salt, key] = hashedPassword.split(':')
    const derivedKey = await scrypt(password, salt, 64)

    return key === derivedKey.toString('hex')
  },
}

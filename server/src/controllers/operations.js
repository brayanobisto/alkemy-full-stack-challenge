const { Operation } = require('../db.js')

module.exports = {
  getAllOperations: (req, res, next) => {
    Operation.findAll()
      .then(operations => {
        res.status(200).json(operations)
      })
      .catch(next)
  },
}

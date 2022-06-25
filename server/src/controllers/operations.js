const { validationResult } = require('express-validator')

const { Operation } = require('../db.js')

module.exports = {
  getAllOperations: (req, res, next) => {
    Operation.findAll()
      .then(operations => {
        res.status(200).json(operations)
      })
      .catch(next)
  },
  createOperation: (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { concept, amount, date, type, category } = req.body

    Operation.create({
      concept,
      amount,
      date,
      type,
      category,
    })
      .then(operation => {
        res.status(201).json(operation)
      })
      .catch(next)
  },
}

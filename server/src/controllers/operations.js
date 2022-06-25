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

  updateOperation: (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { concept, amount, date, category } = req.body
    const { id } = req.params

    Operation.update(
      {
        concept,
        amount,
        date,
        category,
      },
      {
        where: {
          id,
        },
        returning: true,
      }
    )
      .then(([result, operation]) => {
        console.log(result, operation)
        if (result === 0) return res.status(404).json({ errors: [{ msg: `No se econtró la operación con el id ${id}` }] })

        res.status(200).json(operation)
      })
      .catch(next)
  },

  deleteOperation: (req, res, next) => {
    const { id } = req.params

    Operation.destroy({
      where: {
        id,
      },
    }).then(result => {
      if (result === 0) return res.status(404).json({ errors: [{ msg: `No se econtró la operación con el id ${id}` }] })

      res.sendStatus(204)
    })
  },
}

const { Operation } = require('../db.js')

module.exports = {
  getAllOperations: (req, res, next) => {
    const { userId } = req.user

    Operation.findAll({ where: { user_id: userId } })
      .then(operations => {
        res.status(200).json(operations)
      })
      .catch(next)
  },

  createOperation: (req, res, next) => {
    const { concept, amount, date, type, category } = req.body
    const { userId } = req.user

    Operation.create({
      concept,
      amount,
      date,
      type,
      category,
      user_id: userId,
    })
      .then(operation => {
        res.status(201).json(operation)
      })
      .catch(next)
  },

  updateOperation: (req, res, next) => {
    const { concept, amount, date, category } = req.body
    const { id } = req.params
    const { userId } = req.user

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
          user_id: userId,
        },
        returning: true,
      }
    )
      .then(([result, operation]) => {
        if (result === 0) return res.status(404).json({ errors: [{ msg: `No se econtró la operación con el id ${id}` }] })

        res.status(200).json(operation)
      })
      .catch(next)
  },

  deleteOperation: (req, res, next) => {
    const { id } = req.params
    const { userId } = req.user

    Operation.destroy({
      where: {
        id,
        user_id: userId,
      },
    }).then(result => {
      if (result === 0) return res.status(404).json({ errors: [{ msg: `No se econtró la operación con el id ${id}` }] })

      res.sendStatus(204)
    })
  },
}

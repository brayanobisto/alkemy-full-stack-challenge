const { DataTypes } = require('sequelize')

const { CATEGORIES } = require('../constants')

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
  sequelize.define(
    'operation',
    {
      concept: {
        type: DataTypes.TEXT,
      },
      amount: {
        type: DataTypes.DECIMAL(20, 2),
        allowNull: false,
        validate: {
          notNull: {
            msg: 'La cantidad es requerida',
          },
          notEmpty: {
            msg: 'La cantidad es requerida',
          },
          min: {
            args: [1],
            msg: 'La cantidad debe ser mayor a 0',
          },
        },
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'La fecha es requerida',
          },
          notEmpty: {
            msg: 'La fecha es requerida',
          },
        },
      },
      type: {
        type: DataTypes.ENUM('ingreso', 'egreso'),
        allowNull: false,
        validate: {
          notNull: {
            msg: 'El tipo es requerido',
          },
          notEmpty: {
            msg: 'El tipo es requerido',
          },
          isIn: {
            args: [['ingreso', 'egreso']],
            msg: 'El tipo debe ser ingreso o egreso',
          },
        },
      },
      category: {
        type: DataTypes.ENUM(...CATEGORIES),
        default: 'varios',
        validate: {
          isIn: {
            args: [CATEGORIES],
            msg: `La categoría debe ser una de las siguientes: ${CATEGORIES.join(', ')}`,
          },
        },
      },
    },
    {
      timestamps: false,
    }
  )
}

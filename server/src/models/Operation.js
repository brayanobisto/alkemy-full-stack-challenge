const { DataTypes } = require('sequelize')

const categories = ['ahorro', 'comida', 'varios', 'ocio', 'salud']

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
  sequelize.define('operation', {
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
          args: ['ingreso', 'egreso'],
          msg: 'El tipo debe ser ingreso o egreso',
        },
      },
    },
    category: {
      type: DataTypes.ENUM(...categories),
      default: 'varios',
      validate: {
        isIn: {
          args: categories,
          msg: `La categoría debe ser una de las siguientes: ${categories.join(', ')}`,
        },
      },
    },
  })
}

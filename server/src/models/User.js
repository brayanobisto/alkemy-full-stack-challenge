const { DataTypes } = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
  sequelize.define(
    'user',
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: {
            msg: 'El email debe ser un email válido',
          },
          notNull: {
            msg: 'El email es requerido',
          },
          notEmpty: {
            msg: 'El email es requerido',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'La contraseña es requerida',
          },
          notEmpty: {
            msg: 'La contraseña es requerida',
          },
        },
      },
    },
    {
      timestamps: false,
    }
  )
}

const { Sequelize } = require('sequelize')
const fs = require('fs')
const path = require('path')
const DATABASE_URL = process.env.DATABASE_URL

const sequelize =
  process.env.NODE_ENV === 'production'
    ? new Sequelize(DATABASE_URL, {
        logging: false, // set to console.log to see the raw SQL queries
        native: false, // lets Sequelize know we can use pg-native for ~30% more speed
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
          acquire: 60000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(DATABASE_URL, {
        logging: false, // set to console.log to see the raw SQL queries
        native: false, // lets Sequelize know we can use pg-native for ~30% more speed
      })

const basename = path.basename(__filename)

const modelDefiners = []

fs.readdirSync(path.join(__dirname, '/models'))
  .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach(file => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)))
  })

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize))

// Capitalizamos los nombres de los modelos, ejemplo: product => Product
const entries = Object.entries(sequelize.models)
const capsEntries = entries.map(entry => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]])
sequelize.models = Object.fromEntries(capsEntries)

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User, Operation } = sequelize.models

// Aca vendrían las relaciones
User.hasMany(Operation, { foreignKey: 'user_id' })
Operation.belongsTo(User, { foreignKey: 'user_id' })

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
}

require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  NODE_ENV,
  DB_USER, DB_PASSWORD, DB_HOST, DB, DB_PORT,
  DATABASE_URL, 
} = process.env;

const sequelize = !NODE_ENV ? 
  new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB}`, {
      logging: false, 
      native: false,
    })
  :
  new Sequelize(`${DATABASE_URL}`, {
      logging: false, 
      native: false,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    });

sequelize.authenticate()
  .then(() => {
    console.log("db conectada!!!");
  }).catch((err) => {
    console.warn(err);
  })

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Country, Activity } = sequelize.models;

Country.belongsToMany(Activity, { through: "Country_Activity"});
Activity.belongsToMany(Country, { through: "Country_Activity"});

module.exports = {
  ...sequelize.models,
  conn: sequelize
};

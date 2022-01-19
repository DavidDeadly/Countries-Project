const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    code: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flagImg: {
      type: DataTypes.STRING,
      allowNull: null
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: null
    },
    capital: {
      type: DataTypes.STRING
    },
    subregion: {
      type: DataTypes.STRING
    },
    area: {
      type: DataTypes.INTEGER
    },
    population: {
      type: DataTypes.INTEGER
    },
    sName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};







const { Router } = require("express");
const { Country, Activity } = require('../db.js');
const { Op } = require("sequelize");
const fetch = require("cross-fetch");

const countries = Router();
const vF = { exclude: ["sName"] };

countries.get("/", async (req, res) => {
  const { name } = req.query;

  const queryObj = name ? {
    where: {
      sName: {
        [Op.substring]: `${name.toLowerCase()}`
      }
    }, 
    attributes: vF,
    include: Activity
  } : { attributes: vF, include: Activity };
  const activities = await Activity.findAll();

  const countriesList = await Country.findAll(queryObj);

  countriesList.length ? res.status(200).json({countries: countriesList, activities})
  : (() => {
    if(name) return res.status(404).send("No matches");
    fetch("https://restcountries.com/v3/all")
      .then(r => r.json())
      .then(countries => {
        return Country.bulkCreate(countries.map(({ name, flags, region, capital, subregion, population, area, cca3 }) => {
          return {
            code: cca3,
            name: name.common,
            flagImg: flags[1],
            continent: region,
            capital: !capital ? null : capital[0],
            subregion: subregion,
            area: area,
            population: population
          }
        }));
      }).then(async () => {
        res.status(200).json({countries: await Country.findAll({
          attributes: vF, include: Activity
        }), activities});
      }
      );
  })();
});

countries.get("/:code", async (req, res) => {
  try {
    const { code } = req.params;
    // Basic data from db;
    const { dataValues: country } = await Country.findOne({
      where: {
        code: code.toUpperCase()
      }, 
      attributes: vF,
      include: Activity
    }
    );
    res.status(200).json(country);

    //Advanced data from Api;

    // const { dataValues: { code } } = await Country.findByPk(id.toUpperCase());
    // fetch(`https://restcountries.com/v3/name/${code}`)
    //   .then(r => r.json())
    //   .then(country => res.status(200).json(country));
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
});


module.exports = countries;

const { Router } = require("express");
const { Country } = require('../db.js');
const { Op } = require("sequelize");
const fetch = require("cross-fetch");

const countries = Router();

countries.get("/", async (req, res) => {
  const { name } = req.query;

  const queryObj = name ? {
    where: {
      sName: {
        [Op.substring]: `%${name}%`
      }
    }
  } : {};

  const countriesList = await Country.findAll(queryObj);

  countriesList.length ? res.status(200).json(countriesList)
  : (() => {
    if(name) return res.status(404).send("No matches");
    fetch("https://restcountries.com/v3/all")
      .then(res => res.json())
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
            population: population,
            sName: name.common.toLowerCase()
          }
        }));
      }).then(async ()=> res.status(200).json(await Country.findAll()))
  })();
});

countries.get("/:code", async (req, res) => {
  try {
    const { code } = req.params;
    // Basic data from db;

    const { dataValues: country } = await Country.findByPk(code.toUpperCase());
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

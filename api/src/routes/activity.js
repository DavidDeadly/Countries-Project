const { Router } = require("express");
const { Activity } =require("../db.js");

const activity = Router();

activity.post("/", async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;

    const [act, created] = await Activity.findOrCreate({
      where: {
        name
      },
      defaults: {
        name,
        difficulty,
        duration,
        season,
      }
    });

    return created ? (() => {
      act.setCountries(countries);
      res.status(201).json("Activity Successfully Created");
    })() : res.sendStatus(400);

})

module.exports = activity;

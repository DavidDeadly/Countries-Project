const { Router } = require("express");
const { Activity } =require("../db.js");

const activity = Router();

activity.post("/", async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;

  try {
    const act = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });

    act.setCountries(countries);

    res.status(201).json("Activity Successfully Created");
  } catch (err) {
    res.sendStatus(400).json("Activity Not Created");
  }


})

module.exports = activity;

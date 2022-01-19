const { Router } = require("express");
const { Activity } =require("../db.js");

const activity = Router();

activity.post("/", (req, res) => {
  const { name, difficulty, duration, season } = req.body;

  try {
    Activity.create({
      name,
      difficulty,
      duration,
      season,
    });

    res.status(201).json("Activity created");
  } catch (err) {
    console.error(err);
    res.sendStatus(400);
  }


})

module.exports = activity;

const { Country, Activity, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe("Models", () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  beforeEach(() => conn.sync({ force: true }));

  describe("Country model", () => {
    const country =  {
      code: "COL",
      name: "Colombia",
      flagImg: "https://flagcdn.com/w320/co.png",
      continent: "Americas",
      capital: "Bogotá",
      subregion: "South America",
      area: 1141748,
      population: 50882884
    };

    it('should throw an error if name is null', (done) => {
      Country.create({})
        .then(() => done(new Error('It requires a valid name')))
        .catch(() => done());
    });
    it("Should create a country normally", (done) => {
      Country.create(country)
        .then(() => done())
        .catch(() => done(new Error("It should've created the activity")));
    });
    it("Should return the country", (done) => {
      Country.create(country)
        .then(async () => {
          const c = await Country.findByPk(country.code);
          c ? done() : done(new Error("It should've return The country"));
        }).catch(() => done(new Error("It should've created the activity")));
    })
  });

  describe("Activity model", () => {
    const  activity = {
      name: "patinar",
      difficulty: "3",
      duration: 30,
      season: "Spring"
  }
    it("Should throw an error if name is null", (done) => {
      Activity.create({})
        .then(() => done(new Error("It requires a valid name")))
        .catch(() => done());
    });
    it("Should create a normal activity", (done) => {
      Activity.create(activity)
        .then(() =>  done())
        .catch(() => done(new Error("It should've created the activity")));
    });
    it("Should return the activity", (done) => {
      Activity.create(activity)
        .then(async () => {
          const activity = await Activity.findByPk(1);
          !activity ? done(new Error("It should've return the activity"))
          : done();
        }).catch(() => done(new Error("It should've created the activity")));
    })
  });
  
});

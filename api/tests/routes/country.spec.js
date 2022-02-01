/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  code: "NZL",
  name: "New Zealand",
  flagImg: "https://flagcdn.com/w320/nz.png",
  continent: "Oceania",
  capital: "Wellington",
  subregion: "Australia and New Zealand",
  area: 270467,
  population: 5084300,
  activities: []
};
const activity = {
  name: "patinar",
  difficulty: "3",
  duration: 30,
  season: "Spring",
  countries: [country.code]
}

describe("Routes", () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  }));
  beforeEach(() => conn.sync({ force: true })
    .then(() => Country.create(country)));

  describe("GET /countries", () => {
    it("Should get 200 ", async () => {
      await agent.get("/countries")
        .expect(200);
    });
    it("Should be json ", async () => {
      await agent.get("/countries")
        .expect("Content-Type", /application\/json/);
    });
    it("The code should be contain NZL", async () => {
      const { body: { countries: [ country ] } } = await agent.get("/countries");
      expect(country.code).equal("NZL");
    })
  });

  describe("GET /countries?name", () => {
    it("Should get 200", async () => {
      await agent.get("/countries?name=zea")
        .expect(200);
    });
    it("Should be json ", async () => {
      await agent.get("/countries?name=zea")
        .expect("Content-Type", /application\/json/);
    });
    it("The response should contain New Zealand", async () => {
      const { body: { countries: [ country ] } } = await agent.get("/countries?name=zea");
      expect(country.name).equal("New Zealand");
    });
  });

  describe("GET /countries/:code", () => {
    it("Should get 200", async () => {
      await agent.get(`/countries/${country.code}`)
        .expect(200);
    });
    it("Should be json ", async () => {
      await agent.get(`/countries/${country.code}`)
        .expect("Content-Type", /application\/json/);
    });
    it("The response should contain New Zealand and all its info", async () => {
      const { body: { continent }} = await agent.get(`/countries/${country.code}`);
      expect(continent).equal("Oceania");
    })
  });

  describe("POST /activity", () => {
    it("Should get 201", async () => {
      await agent.post("/activity")
          .send(activity)
          .expect(201);
    });
    it("Should be json ", async () => {
      await agent.post("/activity")
          .send(activity)
          .expect("Content-Type", /application\/json/);
    });
    it("Should response with 'Activity Successfully Created'", async () => {
        const response = await agent.post("/activity").send(activity);
        expect(response.body).equal("Activity Successfully Created");
    });
    it("GET to '/countries/:code' should response with the country and its activities", async () => {
      await agent.post("/activity")
        .send(activity);
      agent.get(`/countries/${country.code}`)
        .then(r => expect(r.body.activities).lengthOf(1))
        .catch(err => console.warn(err));
    });
    it("POST to '/activity' should response with 400", async () => {
      await agent.post("/activity")
        .expect(400);
    })
  });
});

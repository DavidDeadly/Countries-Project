const server = require('./src/app.js');
const { conn, Activity } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true })
  .then(() => {
    server.listen(3001, () => {
      console.log('%s listening at 3001'); // eslint-disable-line no-console
    });
  
    Promise.all([
      Activity.create({ name: "Soccer", difficulty: "3", duration: 90}),
      Activity.create({ name: "Swimming", difficulty: "4", season: "Verano"}),
      Activity.create({ name: "Cycling", difficulty: "3", season: "Primavera"}),
      Activity.create({ name: "Runnig", difficulty: "2", season: "Otoño"}),
      Activity.create({ name: "Chess", difficulty: "5"})
    ]).then(res => {
      console.log(`Default activities preloaded!!`);
    }).catch(err =>  console.warn(err));

  });

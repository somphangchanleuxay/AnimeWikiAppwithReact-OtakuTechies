const db = require('../config/connection');
const { User, Anime } = require('../models');
const userSeeds = require('./userSeeds.json');
const cleanDB = require('./cleanDB');
const animeSeeds = require('./animeSeeds');

db.once('open', async () => {
  try {
    await cleanDB('User', 'users');
    await User.create(userSeeds);
    await cleanDB('Anime', 'animes');
    await Anime.create(animeSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Seeded successfully!');
  process.exit(0);
});

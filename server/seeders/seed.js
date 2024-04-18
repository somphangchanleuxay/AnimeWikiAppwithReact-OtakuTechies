const db = require('../config/connection');
const { User, Anime } = require('../models');
const userSeeds = require('./userSeeds.json');
const cleanDB = require('./cleanDB');
const animeSeeds = require('./animeSeeds');

db.once('open', async () => {
  try {
    await cleanDB('User', 'users');
    await User.create(userSeeds);
    await Anime.create(animeSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Users and anime seeded successfully!');
  process.exit(0);
});

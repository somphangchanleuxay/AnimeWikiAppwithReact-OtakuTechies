const { Schema, model } = require('mongoose');

// Schema to create anime model
const animeSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
    },
);

const Anime = model('Anime', animeSchema);

module.exports = Anime;

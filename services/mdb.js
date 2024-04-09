const { MongoClient } = require('mongodb');

// const uri = "mongodb://127.0.0.1:27017/";
const atlas = "mongodb+srv://Sprint2-S3-FSDB:Keyin2021@sprint2.1ithtih.mongodb.net/"

// const pool = new MongoClient(uri);
const pool = new MongoClient(atlas);

module.exports = pool;
const mongoose = require('mongoose');
require('dotenv').config();
let DB_URL = process.env.MONGODB_URL;
console.log(DB_URL);
mongoose.connect(DB_URL, (err) => {
    err ? console.log(`DB is not connected`) : console.log(`DB is connected`);

});
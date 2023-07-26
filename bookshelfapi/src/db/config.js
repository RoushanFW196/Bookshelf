const mongoose = require("mongoose");
require('dotenv').config();
const DB=process.env.db;

mongoose.connect(DB,{useUnifiedTopology: true,useNewUrlParser: true,}).then(() => console.log("Connected to")).catch((e) => console.log("not connected", e.message));


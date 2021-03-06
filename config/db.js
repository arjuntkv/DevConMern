//Entire MongoDB connection is handled here
const mongoose = require("mongoose");

//used to get the mongoURI from "default.json"
const config = require("config");
const db = config.get("mongoURI");

//asynchronous function which will be passed to server.js
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
      //These three are used to handle the DeprecationWarning while connecting DB
    });
    console.log("mongodb connected");
  } catch (err) {
    console.error(err.message);

    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;

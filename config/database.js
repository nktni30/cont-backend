const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB is Connected..."))
    .catch((err) => console.log(` mongoDB fail to connect!${err}`));
};

module.exports = connectDB;

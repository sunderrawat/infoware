const mongoose = require("mongoose");

//connect to database
mongoose
  .connect("mongodb://127.0.0.1:27017/infoware", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb database connected successfully :congratulations: ");
  })
  .catch((err) => {
    console.log("database connecting error :boom:");
  });

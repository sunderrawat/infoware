const express = require("express");

const app = express();

//root route
app.get("/", (req, res) => {
  res.status(200).json({ status: "success", message: "hello from server" });
});

module.exports = app;
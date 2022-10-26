const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const data = require("./Data/courseData.json");

app.get("/", (req, res) => {
  res.send(data);
});

import express from "express";
const app = express();
const PORT = 3000;
import axios from "axios";
require('dotenv').config()

const url_news = process.env.URL_NEWS;
const url_events = process.env.URL_EVENTS;

app.get("/", function (req, res) {
  res.json("This is the Biathlon24 API");
});

app.get("/news", (req, res) => {
  
  axios.get(url_news)
  .then(function (response) {
    res.json(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
});

app.get("/events", (req, res) => {
  
  axios.get(url_events)
  .then(function (response) {
    res.json(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
});

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));

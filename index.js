require("dotenv").config();
const rules = require("./rules");
const events = require("./events");
const history = require("./history");

// @external
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.get("/api/rules", (req, res) => {
  res.json(rules);
});

app.get("/api/events", (req, res) => {
  res.json(events);
});

app.get("/api/history", (req, res) => {
  res.json(history);
});

app.listen(port, () => {
  console.info(`Сервер запущен`);
  console.info(`Ссылка: http://localhost:${port}`);
});

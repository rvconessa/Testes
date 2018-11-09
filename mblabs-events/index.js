import express from "express";
import consign from "consign";

const app = express();

consign({verbose: false})
  .include("config/config.js")
  .then("models/index.js")
  .then("auth.js")
  .then("config/server.js")
  .then("routes")
  .into(app);

module.exports = app;

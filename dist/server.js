"use strict";

const express = require('express');
const app = express();
const config = require('./config');
const {
  port,
  env,
  ksdlfj
} = config;
console.log(`Running in ${env} mode`);
console.log(`var: ${ksdlfj}`);
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
"use strict";

const {
  config
} = require('dotenv');
config();
const vars = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  ksdlfj: process.env.KSDLFJ
};
module.exports = vars;
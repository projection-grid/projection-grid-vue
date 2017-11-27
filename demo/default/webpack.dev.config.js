/* eslint-env node */
const path = require('path');
const config = require('./webpack.config.js');

config.resolve.alias['vue-projection-grid'] = path.join(__dirname, '../../src');

module.exports = config;

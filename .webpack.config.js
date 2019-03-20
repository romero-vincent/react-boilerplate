const webpackMerge = require('webpack-merge');
const common = require('./.webpack/common');

const envs = {
    development: 'dev',
    production: 'prod'
};

const env = envs[ process.env.NODE_ENV || 'development' ];
const config = require(`./.webpack/config.${env}.js`);
module.exports = webpackMerge(common, config);
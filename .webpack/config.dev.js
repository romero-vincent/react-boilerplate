const webpack = require('webpack');
const commonPaths = require('./common.paths');

module.exports = {
    mode: 'development',
    output: {
        filename: '[name].js',
        path: commonPaths.outputPath,
        chunkFilename: '[name].js'
    },
    devServer: {
        contentBase: commonPaths.outputPath,
        compress: true,
        port: 8080
    }
};
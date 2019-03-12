const webpack = require('webpack');
const commonPaths = require('./common.paths');

module.exports = {
    mode: 'production',
    output: {
        filename: '[name].js',
        path: commonPaths.outputPath,
        chunkFilename: '[name].js'
    },
    devServer: {
        contentBase: commonPaths.outputPath,
        compress: true,
        hot: true
    }
};
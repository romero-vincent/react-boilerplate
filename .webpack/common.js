const webpack = require('webpack');
const commonPaths = require('./common.paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: commonPaths.entryPath,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/
            }
        ]
    },
    resolve: {
        modules: [
            'node_modules',
            'src'
        ],
        extensions: ['.js', '.jsx', '.json', '.css']
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: commonPaths.templatePath
        })
    ]
};
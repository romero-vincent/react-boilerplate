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
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: ['file-loader']
            },
        ]
    },
    resolve: {
        modules: [
            'node_modules',
            'src'
        ],
        extensions: ['.js', '.jsx', '.json', '.css', 'woff2']
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: commonPaths.templatePath
        })
    ]
};
const path = require('path');

module.exports = {
    outputPath: path.resolve(__dirname, '../', 'dist'),
    entryPath: ['babel-polyfill', path.resolve(__dirname, '../', 'src/index.jsx')],
    templatePath: path.resolve(__dirname, '../', 'src/template.html')
};
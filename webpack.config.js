const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const rules = [{
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: 'babel-loader'
}, {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
        use: ['css-loader', 'sass-loader'],
        fallback: ['style-loader']
    }) 
}];

module.exports = {
    target: 'web',
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        contentBase: './',
        port: 5000
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
    ]
}
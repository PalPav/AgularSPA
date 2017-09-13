const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                //JS Loader
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                //Styles loader
                test: /\.css/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }]
            },
            {
                //Fonts Loader
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }, {
                // HTML Loader
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
};

config.devServer = {
    contentBase: './public',
    stats: 'minimal'
};

module.exports = config;
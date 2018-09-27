const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry : {
        imc: './imc.js',
        users: './users.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[hash:5]-bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js/, use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './detail.html',
            filename: 'detail.html',
            chunks: ['imc']
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            chunks: ['users']
        })
    ]
}
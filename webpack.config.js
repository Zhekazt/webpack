// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')


/**
 * Типы конфигов вебпак:
 * Function
 * Object
 * Promise
 */
module.exports = () => {
    return {
        mode: 'production',
        devtool: false,
        plugins: [
            new CleanWebpackPlugin('./dist'),
            new FaviconsWebpackPlugin('./static/logo.png'),
            new HtmlWebpackPlugin({
                template: './static/template.html',
                title: 'Век живи...',
            }),

        ]
    }
};

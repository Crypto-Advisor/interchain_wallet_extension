const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const path = require('path');

module.exports = {
    entry: {
        popup: './src/popup.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                }
            }
        }],
    },
    resolve: {
        fallback: {
          "os": require.resolve("os-browserify/browser"),
          "https": require.resolve("https-browserify"),
          "http": require.resolve("stream-http"),
          "crypto": require.resolve("crypto-browserify")
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/popup.html',
            filename: 'popup.html',
        }),
        new CopyPlugin({
            patterns: [
                { from: "public" }
            ]
        }),
        new NodePolyfillPlugin({
            excludeAliases: ["console"]
        }),

    ]
};
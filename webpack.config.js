const webpack = require('webpack');
const path_to_static_js = '/source/static/js'
const config = {
    entry: {
        index: [__dirname + path_to_static_js + '/index.tsx']
    },
    output: {
        path: __dirname + path_to_static_js + '/build/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', /*'.jsx',*/ '.tsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            /*
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            */
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
        ],
    },
    mode: 'development'
};
module.exports = config;
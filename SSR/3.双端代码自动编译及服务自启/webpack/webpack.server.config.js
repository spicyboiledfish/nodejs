const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const resolvePath = (pathStr) => path.resolve(__dirname, pathStr);

process.env.BABEL_ENV = 'node'; // 设置babel的运行环境

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    mode: 'development',
    target: 'node',
    entry: resolvePath('../src/server/app/index.js'),
    output: {
        filename: 'app.js',
        path: resolvePath('../dist/server')
    },
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    }
}
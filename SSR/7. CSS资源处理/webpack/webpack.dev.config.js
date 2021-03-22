const path = require('path');
const Webpack = require('webpack');
const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: resolvePath('../src/client/app/index.js')
    },
    output: {
        filename: '[name].js',
        path: resolvePath('../dist/static')
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                {loader:'css-loader'},
                {
                    loader: "postcss-loader"
                },
                {
                    loader: "sass-loader"
                }
            ]
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]' //配置图片的输出路径和名称
                }
            }]

        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new Webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
}
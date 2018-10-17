const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './index.js',
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            singleton: true
                        }
                    },
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            relativeUrls: false
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.svg$/,
                use: ['svg-inline-loader', 'file-loader']
            }
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.common.js'
        },
        modules: [path.join(__dirname, 'node_modules')]
    },
    resolveLoader: {
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        hot: true,
        inline: true,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'tolyk.js'
    }
}

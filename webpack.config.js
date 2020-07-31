const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: {
        'vue-recyclist': './src/index.js',
        'vue-recyclist.min': './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, './example'),
        publicPath: process.env.NODE_ENV === 'production' ? './example/' : 'example/',
        filename: '[name].js',
        library: 'VueRecyclist',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: process.env.NODE_ENV === 'production',
                },
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]',
                },
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    resolve: {
        alias: {
            vue$: `vue/dist/vue.${process.env.NODE_ENV === 'production' ? 'min' : 'common'}.js`,
        },
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        host: '0.0.0.0',
    },
    performance: {
        hints: false,
    },
}

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
    ])

    module.exports.mode = 'production'
}

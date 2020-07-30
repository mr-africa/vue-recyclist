const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        index: './example/main.js',
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
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        scss: 'vue-style-loader!css-loader!sass-loader',
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                    },
                    // other vue-loader options go here
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
        ],
    },
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
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            sourceMap: true,
            compress: {
                warnings: false,
            },
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
    ])
}

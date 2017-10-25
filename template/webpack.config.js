const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const mockup = require('webpack-dev-server-mock');

const utils = {};

utils.resolveStaticPath = function (path) {
    return 'static/dist' + path;
};

utils.getIPAdress = function () {
    let interfaces = require('os').networkInterfaces();
    for (let devName in interfaces) {
        let iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            let alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
};

const env = {
    NODE_ENV: `"${process.env.NODE_ENV}"`
};

module.exports = {
    entry: {
        // vendor
        vendor: ['babel-polyfill', 'vue', 'vue-router', 'moment', 'underscore'],
        // page
        web: './src/web/main.js'
    },
    output: {
        path: path.resolve(__dirname, './output'),
        publicPath: '/',
        filename: utils.resolveStaticPath('/js/[name]_[chunkhash:7].js'),
        chunkFilename: utils.resolveStaticPath('/js/[name]_[chunkhash:7].js')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    // vue-loader options go here
                    cssModules: {
                        localIdentName: '[name]---[local]---[hash:base64:5]',
                        camelCase: true
                    },
                    loaders: {
                        less: [
                            'vue-style-loader',
                            'css-loader',
                            'postcss-loader',
                            'less-loader'
                        ]
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: {
                    or: [/static/, {
                        and: [/node_modules/, {
                            not: [/element-ui/]
                        }]
                    }]
                }
            },
            {
                test: /\.(css|less)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: false
                        }
                    }, 'postcss-loader', {
                        loader: 'less-loader',
                        options: {
                            paths: [
                                path.resolve(__dirname, 'src')
                            ]
                        }
                    }]
                })
            },
            {
                test: /\.(png|jpe?g|gif)(\?\S*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.resolveStaticPath('/img/[name]_[hash:7].[ext]')
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.resolveStaticPath('/fonts/[name]_[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
        new webpack.LoaderOptionsPlugin({
            minimize: isProduction,
            options: {
                context: __dirname,
                postcss: [autoprefixer]
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        // new HtmlWebpackExternalsPlugin([{
        //     name: 'baidubce',
        //     var: 'Document',
        //     url: './static/bce-sdk-js/baidubce-sdk.bundle.min.js'
        // }]),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: utils.resolveStaticPath('/js/vendor_[hash:7].js')
        }),
        new ExtractTextPlugin({
            filename: utils.resolveStaticPath('/css/[name]_[chunkhash:7].css'),
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            chunks: ['vendor', 'web'],
            minify: {
                removeComments: true,
                collapseWhitespace: isProduction,
                removeAttributeQuotes: false,
                minifyCSS: true
            }
        }),
        // copy custom static assets
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, './static'),
                to: 'static',
                ignore: ['.*']
            }
        ])

    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue',
            'vue-router$': 'vue-router/dist/vue-router',
            // 'io$': 'jquery/src/ajax',
            '@': path.resolve(__dirname, './src'),
            '@static': path.resolve(__dirname, './static'),
            '@common': path.resolve(__dirname, './src/common')
        }
    },
    externals: {
    },
    devServer: {
        host: utils.getIPAdress(),
        historyApiFallback: {
            rewrites: [{
                from: /\/web/,
                to: '/index.html'
            }]
        },
        quiet: true,
        compress: true,
        noInfo: true
    },
    devtool: '#source-map'
    // devtool: 'eval'
};

// 开发环境使用模拟数据
if (process.env.NODE_ENV !== 'testing') {
    module.exports.devServer.before = mockup.setup({
        root: path.resolve(__dirname, 'mockup'),
        prefix: ['/api/*']
    });
}

const TEST_SERVER = '{{ server }}';
// 测试环境使用线下测试数据
if (process.env.NODE_ENV === 'testing') {
    module.exports.devServer.proxy = {
        '/api/*': {
            target: TEST_SERVER,
            changeOrigin: true
        }
    };
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': env
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: false
        })
    ]);
}
else {
    module.exports.plugins = (module.exports.plugins || []).concat([
    ]);
}

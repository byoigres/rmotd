const BASE_PATH = __dirname;

const path = require('path');

// Webpack Plugins
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// PostCSS plugins
const PostcssNext = require('postcss-cssnext');
const PostcssMediaMinMax = require('postcss-media-minmax');
// Constants
const IS_DEV = process.env.NODE_ENV !== 'production';

const postcssOptions = {
  plugins: () => [
    // PostcssImport,
    // PostssCustomMedia(),
    PostcssMediaMinMax(),
    // PostcssExtend(),
    PostcssNext({
      browsers: ['last 2 versions', '> 5%'],
    }),
  ],
};

webpackConfig = {
    name: 'rmotd',
    target: 'web',
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.join(BASE_PATH, 'docs'),
        publicPath: IS_DEV ? '/' : '/rmotd/',
        filename: '[name].js',
        sourceMapFilename: '[name].map.js'
    },
    resolve: {
        modules: [
            'node_modules',
        ],
        alias: {
            styles: path.resolve(BASE_PATH, 'src/styles'),
        },
        extensions: ['.js', 'jsx', 'json', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    'es2015', {
                                        loose: true,
                                        modules: false
                                    }
                                ]
                            ],
                            plugins: [
                                [
                                    'transform-react-jsx', {
                                        pragma: 'h'
                                    }
                                ]
                            ]
                        }
                    }
                ],
                include: path.join(BASE_PATH, 'src'),
            },
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[local]',
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: postcssOptions,
                    },
                ]
            }
        ]
    },
    devtool: IS_DEV ? 'cheap-module-eval-source-map' : 'source-map',
    plugins: [
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: './src/template.html',
            filename: 'index.html',
            // minify: !IS_DEV,
            title: 'Remaining Minutes of the Day',
            hash: false,
            inject: 'body',
        }),
    ],
};

if (IS_DEV) {
    webpackConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );
    webpackConfig.devServer = {
        contentBase: './src',
        historyApiFallback: true,
        host: 'localhost',
        hot: true,
        inline: true,
        port: process.env.PORT || 8000,
        publicPath: '/',
        stats: {
            cached: true,
            cachedAssets: true,
            chunks: true,
            chunkModules: false,
            colors: true,
            hash: false,
            reasons: true,
            timings: true,
            version: false,
        },
    };
} else {
    webpackConfig.plugins.push(
        new CleanWebpackPlugin(path.join(BASE_PATH, 'docs')),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            compress: {
                screw_ie8: true,
                warnings: false
            },
            output: {
                comments: false,
                screw_ie8: true
            },
            mangle: {
                screw_ie8: true
            },
            sourceMap: true
        })
    );

    webpackConfig.module.rules.forEach(rule => {
        if (rule.test.test('.css')) {
            rule.use = ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[hash:base64:8]'
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: postcssOptions
                    }
                ]
            });
        }
    });
}

module.exports = webpackConfig;
const BASE_PATH = __dirname;

const path = require('path');

// Webpack Plugins
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
// PostCSS plugins
const PostcssNext = require('postcss-cssnext');
const PostcssMediaMinMax = require('postcss-media-minmax');
const PostcssImport = require('postcss-import');

// Markdown
const marked = require('marked');

// Constants
const IS_DEV = process.env.NODE_ENV !== 'production';
const PUBLIC_PATH = '/minutes';

const renderer = new marked.Renderer();
renderer.blockquote = text => `<blockquote>${text.replace(/<\/?p>/, '')}</blockquote>`;

const postcssOptions = {
  plugins: () => [
    PostcssImport(),
    PostcssMediaMinMax(),
    PostcssNext({
      browsers: ['last 2 versions', '> 5%'],
    }),
  ],
};

const webpackConfig = {
  name: 'minutes',
  target: 'web',
  entry: {
    app: './src/index.js',
    // home: './src/pages/Home',
    markdown: [
      './src/markdown/about.en.md',
      './src/markdown/about.es.md',
      './src/markdown/what-is-this.en.md',
      './src/markdown/what-is-this.es.md',
    ],
    vendor: [
      'preact',
      'preact-compat',
      'react-intl',
      'react-router-dom',
    ]
  },
  output: {
    path: path.join(BASE_PATH, 'docs'),
    publicPath: PUBLIC_PATH,
    filename: '[name].js',
    sourceMapFilename: '[name].map.js',
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    alias: {
      styles: path.resolve(BASE_PATH, 'src/styles'),
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    },
    extensions: ['.js', '.jsx', '.json', '.css', '.md'],
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
                    modules: false,
                  },
                ],
              ],
              plugins: [
                [
                  'transform-react-jsx', {
                    pragma: 'h',
                  },
                ],
              ],
            },
          },
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
        ],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader'
          },
          {
            loader: 'markdown-loader',
            options: {
              renderer,
            }
          }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'image/svg+xml'
            }
          }
        ]
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
    ],
  },
  devtool: IS_DEV ? 'cheap-module-eval-source-map' : 'source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      filename: 'index.html',
      manifestFile: `${PUBLIC_PATH}/manifest.json`,
      // minify: !IS_DEV,
      title: 'Remaining Minutes of the Day',
      hash: false,
      inject: 'body',
    }),
    new FaviconsWebpackPlugin({
      logo: './src/public/minutes-circle.png',
      inject: true,
      prefix: 'icons/',
      title: 'Minutes',
    }),
  ],
};

if (IS_DEV) {
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin() /* eslint comma-dangle: 0 */
  );
  webpackConfig.devServer = {
    contentBase: './src',
    historyApiFallback: true,
    host: 'localhost',
    hot: true,
    inline: true,
    port: process.env.PORT || 8000,
    publicPath: PUBLIC_PATH,
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
    new webpack.optimize.CommonsChunkPlugin({
      names: ['markdown', 'vendor'],
      minChunks(module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1/* || module.context.indexOf('src/markdown') !== -1)*/;
      },
    }),
    new CleanWebpackPlugin(path.join(BASE_PATH, 'docs')),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new CopyWebpackPlugin([
      { from: './src/public/manifest.json' },
    ]),
    // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
      mangle: {
        screw_ie8: true,
      },
      sourceMap: true,
    })
  );

  webpackConfig.module.rules.forEach((rule) => {
    if (rule.test.test('.css')) {
      rule.use = ExtractTextPlugin.extract({ /* eslint no-param-reassign: 0 */
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[hash:base64:8]',
            },
          },
          {
            loader: 'postcss-loader',
            options: postcssOptions,
          },
        ],
      });
    }
  });
}

module.exports = webpackConfig;

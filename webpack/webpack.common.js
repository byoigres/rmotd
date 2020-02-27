const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const marked = require('marked');

const renderer = new marked.Renderer();
renderer.blockquote = text => `<blockquote>${text.replace(/<\/?p>/, '')}</blockquote>`;

module.exports = {
  entry: {
    app: ['./src/index.js'],
    english: [
      './src/resources/markdown/what-is-this.en.md',
      './src/resources/markdown/about.en.md'
    ],
    spanish: [
      './src/resources/markdown/what-is-this.es.md',
      './src/resources/markdown/about.es.md'
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
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
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/public/template.html',
      // template: require('html-webpack-template'),
      title: 'Remaining Minutes of the Day',
      manifestFile: "/manifest.json",
      inject: 'body',
      appMountId: 'app',
      meta: [
        {
          name: 'viewport',
          content: 'minimum-scale=1, initial-scale=1, width=device-width'
        }
      ],
      links: [
        'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css',
        'https://fonts.googleapis.com/css?family=Fjalla+One|Lato:400,700|Slabo+27px'
      ]
    }),
    new FaviconsWebpackPlugin({
      logo: './src/public/minutes-circle.png',
      emitStats: false,
      inject: true,
      prefix: 'icons/',
      title: 'Minutes',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
  ],
  output: {
    path: path.resolve(__dirname, '../docs'),
    filename: '[name].[hash].js',
    publicPath: '/'
  }
};
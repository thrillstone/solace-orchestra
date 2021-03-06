const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const solclientjs = path.resolve(__dirname, '../common/solclient.js');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Orchestra-Hero',
      template: './src/index.html'
    }),
  ],
  devServer: {
    port: 8889,
    host: '0.0.0.0',
    disableHostCheck: true,
    open: false, // Open the page in browser
    overlay: true,
    historyApiFallback: true
  },
  devtool: 'inline-source-map',
  
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "url-loader?name=/assets/[name].[ext]"
      },
      {
        test: /\.(wav|woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};

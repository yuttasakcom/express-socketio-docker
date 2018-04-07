import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const resolve = dir => path.resolve(__dirname, '../', dir)

const config = {
  entry: resolve('client/client.js'),
  output: {
    path: resolve('dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('client/public/index.html')
    })
  ]
}

export default config

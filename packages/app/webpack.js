import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import ReactRefreshPlugin from 'react-refresh/babel'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default {
  mode: 'development',
  entry: ['./index.tsx'],
  output: {
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  context: resolve(__dirname, 'src'),
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.[jt]sx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                ['@babel/preset-react', { runtime: 'automatic' }],
                '@babel/preset-typescript',
              ],
              plugins: [ReactRefreshPlugin],
            },
          },
        ],
      },
    ],
  },
  devServer: {
    open: true,
    hot: true,
    historyApiFallback: true,
    proxy: [
      { context: ['/graphql'], target: 'http://localhost:3001/' },
      { context: ['/api'], target: 'http://localhost:3002/' },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({ template: '../public/index.html.ejs' }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
  performance: {
    hints: false,
  },
}

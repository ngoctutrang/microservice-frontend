const {merge} = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFedrationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    output:{
        publicPath: 'http://localhost:8081/'
    },
    devServer: {
        port: 8081,
        historyApiFallback: true
    },
    plugins: [
        new ModuleFedrationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap'
            },
            // shared: ['react', 'react-dom']
            shared: packageJson.dependencies
        }),
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ]
}

module.exports = merge(commonConfig, devConfig)
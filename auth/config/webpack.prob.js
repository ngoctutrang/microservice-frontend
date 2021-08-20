const {merge} = require('webpack-merge')
const ModuleFedrationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')


const probConfig = {
    mode: 'production',
    output: {
        filename: `[name].[contenthash].js`,
        publicPath: '/auth/latest/'
    },
    plugins: [
        new ModuleFedrationPlugin({
            name: 'auth',
            exposes: {
                './AuthApp': './src/bootstrap'
            },
            // shared: ['react', 'react-dom']
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, probConfig)
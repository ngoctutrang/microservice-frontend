const {merge} = require('webpack-merge')
const ModuleFedrationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')


const probConfig = {
    mode: 'production',
    output: {
        filename: `[name].[contenthash].js`,
        publicPath: '/dashboard/latest/'
    },
    plugins: [
        new ModuleFedrationPlugin({
            name: 'dashboard',
            exposes: {
                './DashboardApp': './src/bootstrap'
            },
            // shared: ['react', 'react-dom']
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, probConfig)
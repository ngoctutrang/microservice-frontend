const {merge} = require('webpack-merge')
const ModuleFedrationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN


const probConfig = {
    mode: 'production',
    output: {
        filename: `[name].[contenthash].js`,
        publicPath: '/container/latest/'
    },
    plugins: [
        new ModuleFedrationPlugin({
            name: 'container',
            remotes: {
                'marketing': `marketing@${domain}/marketing/latest/remoteEntry.js` 
            },
            // shared: ['react', 'react-dom']
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, probConfig)
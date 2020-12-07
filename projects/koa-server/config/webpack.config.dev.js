const webpackMerge = require('webpack-merge')

const baseWebpackConfig = require('webpack.config.base')

const webpackConfig = webpackMerge(baseWebpackConfig, {
    devtool: 'eval-source-map',
    mode: 'development',
    status: { children: false }
})

module.export = webpackConfig
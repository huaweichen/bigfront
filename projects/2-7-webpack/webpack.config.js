const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const config = {
    entry: './src/index.js',
    output: {
        // path.join() 去拼接路径
        // __dirname 当前文件的绝对路径
        filename: 'bundle.js',
        path: path.join(__dirname, './dist-not-ignore')
    },
    devServer: {
        hot: true
    },
    module: {
        rules: [
            {
                // sass-loader node-sass两个依赖都需要安装
                test: /\.(scss|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                // https://webpack.js.org/loaders/url-loader/
                test: /\.(png|jpg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5 * 1024,
                            esModule: false,
                            outputPath: 'images',
                            // https://webpack.js.org/loaders/file-loader/#hashtypehashdigesttypelength
                            name: '[name]-[md4:hash:hex:4].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]-[md4:hash:hex:4].[ext]',
                            outputPath: 'fonts',
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/template.html'
        })
    ]
}

module.exports = config
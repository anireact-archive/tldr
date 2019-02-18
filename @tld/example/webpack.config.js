const { join } = require('upath');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    target: 'web',
    context: __dirname,
    externals: {},
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    output: {
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/u,
                use: ['source-map-loader'],
                enforce: 'pre',
            },
            {
                test: /\.[jt]sx?$/u,
                exclude: /node_modules/u,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svgz?|ttf|otf|eot|woff2?)$/u,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[sha512:hash:base58:8].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    devServer: {
        contentBase: join(__dirname, 'dist'),
        compress: true,
        host: '0.0.0.0',
        port: 1337,
        historyApiFallback: true,
    },
};

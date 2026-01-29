//@ts-check

'use strict';

const path = require('path');

const config = {
    target: 'node',
    entry: './src/extension.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'extension.js',
        libraryTarget: 'commonjs2',
        devtoolModuleFilenameTemplate: '../[resource-path]'
    },
    devtool: 'source-map',
    externals: {
        vscode: 'commonjs vscode'
    },
    resolve: {
        // support reading TypeScript and JavaScript files, 📖 -> https://github.com/TypeStrong/ts-loader
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                include: [
                    path.resolve(__dirname, 'node_modules/jsonc-parser/lib')
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            //'@babel/plugin-proposal-object-rest-spread',
                            '@babel/plugin-proposal-nullish-coalescing-operator'
                        ],
                    },
                },
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true // Skip type checking for faster builds
                        }
                    }
                ]
            }
        ]
    }
};
module.exports = config;

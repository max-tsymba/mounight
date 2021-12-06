import path from 'path';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import ESLintPlugin from 'eslint-webpack-plugin';

module.exports = {
    mode: 'development',
    entry: ["@babel/polyfill", './src/public/index.tsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[hash].js",
        publicPath: '/',
    },
    devServer: {
        port: 4000,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts'],
    },
    plugins: [
        new HTMLWebpackPlugin({template: "./src/public/index.html"}),
        new CleanWebpackPlugin(),
        new ESLintPlugin({
            extensions: ["js", "jsx", "ts", "tsx"]
        })
    ],
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader", 
                    "css-loader", 
                    "sass-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: [tailwind, autoprefixer],
                            },
                        },
                    },
                ]
            },
            {
                test: /\.(jpg|jpeg|png|eot|ttf|woff)$/,
                use: ['file-loader']
            },
            {
                test: /\.m?ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.m?(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react", "@babel/preset-typescript"]
                    }
                }
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'url-loader'],
            },
        ]
    }
}
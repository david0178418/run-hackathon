/* eslint-disable @typescript-eslint/no-var-requires */
const { pick } = require('lodash');
const { resolve, join } = require('path');
const { DefinePlugin, ProvidePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const config = require('./config');

const {
	NODE_ENV = 'development',
	PUBLIC_URL = '/',
} = process.env;

const IS_DEV = NODE_ENV === 'development';

/**
 * @typedef { import('webpack').Configuration } Configuration
 *
 * @type {Configuration}
 */
module.exports = {
	mode: NODE_ENV,
	devtool: IS_DEV ? 'eval-source-map' : false,
	entry: ['./src/index.ts'],
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		alias: {
			'@common': resolve(__dirname, './src/common'),
			'@components': resolve(__dirname, './src/components/'),
			'@pages': resolve(__dirname, './src/pages/'),
			'@': resolve(__dirname, './src/'),
		},
		fallback: {
			crypto: false,
		},
	},
	externals: {
		// Hack due to prodction-only bug with the production build and RUn
		'run-sdk': 'Run',
		'moneybutton': 'moneyButton',
	},
	output: {
		filename: '[name].[hash].js',
		path: resolve(__dirname, 'build'),
		publicPath: join(PUBLIC_URL, '/'),
	},
	devServer: {
		contentBase: join(__dirname, 'build'),
		historyApiFallback: true,
		compress: true,
		port: 3000,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					'linaria/loader',
					'ts-loader',
				],
				exclude: /node_modules/,
			},
			{
				test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
				use: ['file-loader'],
			},
			{
				test: /\.(s?css)$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new CopyPlugin({
			patterns: [
				{
					from: 'src/assets',
					to: 'assets',
				},
			],
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			PUBLIC_URL,
		}),
		new ProvidePlugin({
			asser: 'assert',
			Buffer: ['buffer', 'Buffer'],
			process: 'process/browser',
		}),
		new DefinePlugin({
			CONFIG: JSON.stringify(pick(config, [
				'FIREBASE_API_KEY',
				'FIREBASE_AUTH_DOMAIN',
				'FIREBASE_PROJECT_ID',
				'FIREBASE_APP_ID',
			])),
		}),
		// new BundleAnalyzerPlugin(),
	],
};

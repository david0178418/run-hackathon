/* eslint-disable @typescript-eslint/no-var-requires */
const dotEnv = require('dotenv');
const path = require('path');
const dotenvExpand = require('dotenv-expand');

const config = dotEnv.config;
const resolve = path.resolve;

const env = process.env.NODE_ENV || 'development';
const IS_DEV = env !== 'production';
const useLocalEnv = IS_DEV && require('fs').existsSync('env/.env.development.local');

let parsedLocalEnv = {};

if(useLocalEnv) {
	parsedLocalEnv = dotenvExpand(config({
		path: resolve(process.cwd(), 'env', '.env.development.local'),
	})).parsed || {};
}

const parsedEnv = dotenvExpand(config({
	path: resolve(process.cwd(), 'env', `.env.${env}`),
})).parsed || {};

/** @type {import('./src/common/types').Config} */
module.exports = {
	...parsedEnv,
	...parsedLocalEnv,
	...process.env,
	IS_DEV,
};

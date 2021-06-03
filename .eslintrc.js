const OFF = 0;
const WARN = 1;
const ERR = 2;

module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	env: {
		'browser': true,
		'node': true,
		'es6': true,
	},
	plugins: [
		'react',
		'react-hooks',
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'@typescript-eslint/ban-ts-comment': OFF,
		'@typescript-eslint/no-misused-new': OFF,
		'@typescript-eslint/explicit-module-boundary-types': OFF,
		'@typescript-eslint/indent': [ERR, 'tab'],
		'@typescript-eslint/no-empty-function': OFF,
		'@typescript-eslint/no-explicit-any': OFF,
		'@typescript-eslint/no-shadow': ERR,
		'comma-dangle': [WARN, 'always-multiline'],
		'jsx-a11y/alt-text': OFF,
		'jsx-a11y/anchor-is-valid': OFF,
		'no-extra-semi': WARN,
		'no-shadow': OFF,
		'prefer-const': ERR,
		quotes: [WARN, 'single'],
		'react/prop-types': OFF,
		semi: ERR,
	},
};

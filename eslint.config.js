'use strict'

const js = require('@eslint/js')
const stylistic = require('@stylistic/eslint-plugin')
const globals = require('globals')

module.exports = [
	{
		ignores: ['src/endpoints/*.js', 'node_modules/**']
	},
	js.configs.recommended,
	{
		files: ['src/app.js', 'src/utils.js', 'scripts/**/*.js', 'src/endpoints/v2/**/*.js'],
		plugins: {
			'@stylistic': stylistic
		},
		languageOptions: {
			ecmaVersion: 2018,
			sourceType: 'commonjs',
			globals: {
				...globals.node
			}
		},
		rules: {
			'eqeqeq': 'error',
			'prefer-const': 'error',
			'no-var': 'error',
			'prefer-template': 'error',
			'object-shorthand': 'error',
			'no-eval': 'error',
			'no-implied-eval': 'error',
			'dot-notation': 'error',
			'yoda': ['error', 'never', {'exceptRange': true}],
			'no-empty': ['error', {'allowEmptyCatch': true}],
			'no-labels': ['error', {'allowLoop': true}],
			'no-constant-condition': ['error', {'checkLoops': false}],
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/quotes': ['error', 'single'],
			'@stylistic/linebreak-style': ['error', 'windows']
		}
	}
]

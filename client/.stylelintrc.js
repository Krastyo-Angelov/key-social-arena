module.exports = {
	customSyntax: 'postcss-scss',
	plugins: [
		'stylelint-order',
		'stylelint-scss',
		'stylelint-rational-order-plugin',
	],
	extends: ['stylelint-config-standard', 'stylelint-config-css-modules'],
	rules: {
		'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
		'order/order': [
			[
				{
					type: 'at-rule',
				},
				{
					type: 'at-rule',
					hasBlock: true,
				},
				{
					type: 'at-rule',
					name: 'include',
				},
				{
					type: 'at-rule',
					name: 'include',
					hasBlock: true,
				},
				'dollar-variables',
				'custom-properties',
				'declarations',
				'rules',
			],
		],
		'plugin/rational-order': [
			true,
			{
				'border-in-box-model': false,
				'empty-line-between-groups': false,
			},
		],
		'length-zero-no-unit': true,
		'color-named': 'never',
		'color-hex-length': 'short',
		'shorthand-property-no-redundant-values': true,
		'no-invalid-double-slash-comments': true,
		'alpha-value-notation': 'number',
		'function-url-quotes': 'never',

		//-----------------------------------------------------
		// @ rules
		'at-rule-no-unknown': null,
		'at-rule-empty-line-before': [
			'always',
			{
				except: [
					'inside-block',
					'blockless-after-same-name-blockless',
					'blockless-after-blockless',
					'first-nested',
				],
				ignore: [
					'after-comment',
					'first-nested',
					'inside-block',
					'blockless-after-same-name-blockless',
					'blockless-after-blockless',
				],
			},
		],

		//-----------------------------------------------------
		// stylelint-scss
		'scss/at-rule-no-unknown': true,
		'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
		'scss/at-else-closing-brace-space-after': 'always-intermediate',
		'scss/at-else-empty-line-before': 'never',
		'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
		'scss/at-if-closing-brace-space-after': 'always-intermediate',
	},
};

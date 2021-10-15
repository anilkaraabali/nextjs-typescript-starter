module.exports = {
  plugins: ['stylelint-order', 'stylelint-declaration-strict-value'],
  defaultSeverity: 'error',
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'at-rule-name-case': 'lower',
    'block-closing-brace-newline-after': 'always',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': 'never',
    'comment-whitespace-inside': 'always',
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
        ignoreComments: [/^rtl/],
        severity: 'error',
      },
    ],
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ],
    'declaration-block-single-line-max-declarations': 1,
    'font-weight-notation': 'numeric',
    'function-name-case': [
      'lower',
      {
        ignoreFunctions: ['/^getColor/'],
      },
    ],
    'length-zero-no-unit': true,
    'property-case': 'lower',
    'max-empty-lines': [1, { severity: 'error' }],
    'selector-max-empty-lines': 0,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-element-colon-notation': 'single',
    'selector-pseudo-element-case': 'lower',
    'selector-type-case': 'lower',
    'unit-case': 'lower',
    'value-list-comma-space-after': 'always',
    'value-keyword-case': 'lower',

    'order/properties-alphabetical-order': true,
    'scale-unlimited/declaration-strict-value': [
      [
        '/color$/',
        '/padding(-top|-left|-right|-bottom)/',
        '/margin(-top|-left|-right|-bottom)/',
        'z-index',
        'font-size',
        'font-weight',
        'fill',
        'stroke',
        'border-color',
      ],
      {
        expandShorthand: true,
        ignoreKeywords: {
          // default, for all
          '': ['currentColor', 'inherit', 'transparent'],
          '/margin(-top|-left|-right|-bottom)/': ['0', 'auto'],
          '/padding(-top|-left|-right|-bottom)/': ['0'],
          'font-size': ['62.5%'],
        },
      },
    ],
  },
};

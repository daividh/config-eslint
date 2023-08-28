module.exports = {
  // Let typescript do the job
  // Ref: https://github.com/typescript-eslint/typescript-eslint/blob/main/docs/linting/TROUBLESHOOTING.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
  'no-undef': 'off',

  // All rules above comes from https://typescript-eslint.io/rules/
  // We explicitly enable all rules even those which are not being a part
  // of the recommended set to enforce coding conventions
  // Some of theses rules may be disabled in the future if they are meaningless
  // or too restrictive

  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/array-type': 'error',
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': 'allow-with-description',
      'ts-nocheck': 'allow-with-description',
      'ts-check': 'allow-with-description',
    },
  ],
  '@typescript-eslint/ban-tslint-comment': 'error',
  '@typescript-eslint/ban-types': 'error',
  '@typescript-eslint/class-literal-property-style': 'error',
  '@typescript-eslint/consistent-generic-constructors': 'error',
  '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow',
    },
  ],
  // We allow to create type by using interface or type
  '@typescript-eslint/consistent-type-definitions': 'off',
  '@typescript-eslint/consistent-type-exports': 'error',
  '@typescript-eslint/consistent-type-imports': 'error',
  // Overridden below in override section
  '@typescript-eslint/explicit-function-return-type': 'error',
  '@typescript-eslint/explicit-member-accessibility': 'error',
  // Disabled in favour of @typescript-eslint/explicit-function-return-type
  // '@typescript-eslint/explicit-module-boundary-types': 'error',
  '@typescript-eslint/member-delimiter-style': [
    'error',
    {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
      multilineDetection: 'brackets',
    },
  ],
  '@typescript-eslint/member-ordering': 'error',
  '@typescript-eslint/method-signature-style': 'error',
  '@typescript-eslint/naming-convention': 'error',
  '@typescript-eslint/no-base-to-string': 'error',
  '@typescript-eslint/no-confusing-non-null-assertion': 'error',
  '@typescript-eslint/no-confusing-void-expression': 'error',
  '@typescript-eslint/no-duplicate-enum-values': 'error',
  '@typescript-eslint/no-duplicate-type-constituents': 'error',
  '@typescript-eslint/no-dynamic-delete': 'error',
  '@typescript-eslint/no-empty-interface': 'error',
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-extra-non-null-assertion': 'error',
  '@typescript-eslint/no-extraneous-class': 'error',
  '@typescript-eslint/no-floating-promises': 'error',
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-import-type-side-effects': 'error',
  '@typescript-eslint/no-inferrable-types': 'error',
  '@typescript-eslint/no-invalid-void-type': 'error',
  '@typescript-eslint/no-meaningless-void-operator': 'error',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-misused-promises': 'error',
  '@typescript-eslint/no-mixed-enums': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/no-redundant-type-constituents': 'error',
  '@typescript-eslint/no-require-imports': 'error',
  '@typescript-eslint/no-this-alias': 'error',
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
  '@typescript-eslint/no-unnecessary-condition': 'error',
  '@typescript-eslint/no-unnecessary-qualifier': 'error',
  '@typescript-eslint/no-unnecessary-type-arguments': 'error',
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/no-unsafe-argument': 'error',
  '@typescript-eslint/no-unsafe-assignment': 'error',
  '@typescript-eslint/no-unsafe-call': 'error',
  '@typescript-eslint/no-unsafe-declaration-merging': 'error',
  '@typescript-eslint/no-unsafe-enum-comparison': 'error',
  '@typescript-eslint/no-unsafe-member-access': 'error',
  '@typescript-eslint/no-unsafe-return': 'error',
  '@typescript-eslint/no-useless-empty-export': 'error',
  '@typescript-eslint/no-var-requires': 'error',
  '@typescript-eslint/non-nullable-type-assertion-style': 'error',
  '@typescript-eslint/parameter-properties': 'error',
  '@typescript-eslint/prefer-as-const': 'error',
  '@typescript-eslint/prefer-enum-initializers': 'error',
  '@typescript-eslint/prefer-for-of': 'error',
  '@typescript-eslint/prefer-function-type': 'error',
  '@typescript-eslint/prefer-includes': 'error',
  '@typescript-eslint/prefer-literal-enum-member': 'error',
  '@typescript-eslint/prefer-namespace-keyword': 'error',
  '@typescript-eslint/prefer-nullish-coalescing': 'error',
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/prefer-readonly': 'error',
  // Disabled because of verbosity
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',
  '@typescript-eslint/prefer-reduce-type-parameter': 'error',
  '@typescript-eslint/prefer-regexp-exec': 'error',
  '@typescript-eslint/prefer-return-this-type': 'error',
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',
  '@typescript-eslint/prefer-ts-expect-error': 'error',
  '@typescript-eslint/promise-function-async': 'error',
  '@typescript-eslint/require-array-sort-compare': 'error',
  '@typescript-eslint/restrict-plus-operands': 'error',
  '@typescript-eslint/restrict-template-expressions': 'error',
  '@typescript-eslint/sort-type-constituents': 'error',
  '@typescript-eslint/strict-boolean-expressions': 'error',
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
  '@typescript-eslint/triple-slash-reference': 'error',
  '@typescript-eslint/type-annotation-spacing': 'error',
  '@typescript-eslint/typedef': 'error',
  '@typescript-eslint/unbound-method': 'error',
  '@typescript-eslint/unified-signatures': 'error',

  // Extension Rules

  'brace-style': 'off',
  '@typescript-eslint/brace-style': 'off',

  'class-methods-use-this': 'off',
  '@typescript-eslint/class-methods-use-this': 'error',

  'comma-dangle': 'off',
  '@typescript-eslint/comma-dangle': [
    'error',
    {
      enums: 'only-multiline',
      arrays: 'only-multiline',
      objects: 'only-multiline',
      imports: 'only-multiline',
      exports: 'only-multiline',
      functions: 'only-multiline',
    },
  ],

  'comma-spacing': 'off',
  '@typescript-eslint/comma-spacing': 'error',

  'default-param-last': 'off',
  '@typescript-eslint/default-param-last': 'error',

  'dot-notation': 'off',
  '@typescript-eslint/dot-notation': 'error',

  'func-call-spacing': 'off',
  '@typescript-eslint/func-call-spacing': 'error',

  // Off because it's a complicated rule
  // and styling is managed by prettier
  '@typescript-eslint/indent': 'off',

  'init-declarations': 'off',
  '@typescript-eslint/init-declarations': 'error',

  'key-spacing': 'off',
  '@typescript-eslint/key-spacing': 'error',

  'lines-around-comment': 'off',
  '@typescript-eslint/lines-around-comment': 'error',

  'no-array-constructor': 'off',
  '@typescript-eslint/no-array-constructor': 'error',

  'no-dupe-class-members': 'off',
  '@typescript-eslint/no-dupe-class-members': 'error',

  'no-empty-function': 'off',
  '@typescript-eslint/no-empty-function': 'error',

  // Conflict with prettier
  'no-extra-parens': 'off',
  '@typescript-eslint/no-extra-parens': 'off',

  'no-extra-semi': 'off',
  '@typescript-eslint/no-extra-semi': 'error',

  'no-implied-eval': 'off',
  '@typescript-eslint/no-implied-eval': 'error',

  'no-invalid-this': 'off',
  '@typescript-eslint/no-invalid-this': 'error',

  'no-loop-func': 'off',
  '@typescript-eslint/no-loop-func': 'error',

  'no-loss-of-precision': 'off',
  '@typescript-eslint/no-loss-of-precision': 'error',

  'no-magic-numbers': 'off',
  '@typescript-eslint/no-magic-numbers': 'error',

  'no-redeclare': 'off',
  '@typescript-eslint/no-redeclare': 'error',

  'no-restricted-imports': 'off',
  '@typescript-eslint/no-restricted-imports': 'error',

  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': 'error',

  'no-throw-literal': 'off',
  '@typescript-eslint/no-throw-literal': 'error',

  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': 'error',

  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': 'error',

  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': 'error',

  'no-useless-constructor': 'off',
  '@typescript-eslint/no-useless-constructor': 'error',

  'object-curly-spacing': 'off',
  '@typescript-eslint/object-curly-spacing': ['error', 'always'],

  'padding-line-between-statements': 'off',
  '@typescript-eslint/padding-line-between-statements': 'error',

  quotes: 'off',
  '@typescript-eslint/quotes': [
    'error',
    'single',
    { avoidEscape: true, allowTemplateLiterals: true },
  ],

  'require-await': 'off',
  '@typescript-eslint/require-await': 'error',

  'no-return-await': 'off',
  '@typescript-eslint/return-await': 'error',

  semi: 'off',
  '@typescript-eslint/semi': 'error',

  'space-before-blocks': 'off',
  '@typescript-eslint/space-before-blocks': 'error',

  '@typescript-eslint/space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    },
  ],
  '@typescript-eslint/space-infix-ops': 'error',
};

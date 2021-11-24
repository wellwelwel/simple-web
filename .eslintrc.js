/*
* The most common settings in design patterns
* Customize to your needs
*/

module.exports = {

   parserOptions: {

      ecmaVersion: 12, /* 2021 */
      ecmaFeatures: { jsx: false }
   },
   env: {

      mocha: false,
      node: false,
      browser: true,
      commonjs: true,
      es2021: true
   },
   rules: {

      yoda: 1,
      curly: [ 1, 'multi' ],
      eqeqeq: [ 2, 'always' ],
      quotes: [ 1, 'single', 'avoid-escape' ],
      semi: [ 2, 'always', { omitLastInOneLineBlock: true } ],
      indent: [ 1, 3, { ignoredNodes: [ 'ConditionalExpression' ] } ],
      'comma-dangle': [ 1, { arrays: 'never', objects: 'never', imports: 'never', exports: 'never', functions: 'never' } ],
      'keyword-spacing': [ 1, { overrides: { if: { after: true }, for: { after: true }, while: { after: true } } } ],
      'space-before-function-paren': [ 2, { anonymous: 'always', named: 'never', asyncArrow: 'always' } ],
      'lines-between-class-members': [ 1, 'always', { exceptAfterSingleLine: true } ],
      'no-extra-boolean-cast': [ 2, { enforceForLogicalOperands: true } ],
      'init-declarations': [ 2, 'always' ],
      'spaced-comment': [ 2, 'always', { exceptions: [ '+-=*' ] } ],
      'key-spacing': [ 1, { beforeColon: false, mode: 'strict' } ],
      'no-console': [ 1, { allow: [ 'warn', 'error', 'clear', 'info' ] } ],
      'no-mixed-operators': [ 2, { allowSamePrecedence: true } ],
      'no-multiple-empty-lines': [ 2, { max: 1, maxEOF: 0 } ],
      'no-duplicate-imports': [ 1, { includeExports: true } ],
      'no-multi-spaces': [ 1, { ignoreEOLComments: false } ],
      'comma-spacing': [ 1, { before: false, after: true } ],
      'getter-return': [ 2, { allowImplicit: true } ],
      'no-param-reassign': [ 2, { props: false } ],
      'no-shadow': [ 2, { hoist: 'functions' } ],
      'no-self-assign': [ 2, { props: false } ],
      'no-bitwise': [ 2, { allow: [ '~' ] } ],
      'computed-property-spacing': [ 1, 'never' ],
      'array-bracket-spacing': [ 1, 'always' ],
      'template-curly-spacing': [ 1, 'never' ],
      'space-in-parens': [ 1, 'never' ],
      'eol-last': [ 1, 'never' ],
      'no-mixed-spaces-and-tabs': 1,
      'no-trailing-spaces': [ 1, { ignoreComments: true, skipBlankLines: true } ],
      'no-unused-vars': 1,
      'object-curly-spacing': [ 1, 'always' ],
      'space-unary-ops': 2,
      'space-before-blocks': 1,
      'no-template-curly-in-string': 2,
      'func-call-spacing': [ 2, 'never' ],
      'newline-after-var': [ 1, 'always' ],
      'no-var': 2,
      'multiline-ternary': [ 2, 'never' ],
      'operator-linebreak': [ 2, 'none' ],
      'space-infix-ops': 1,
      'no-const-assign': 2,
      'no-redeclare': 2,
      'no-async-promise-executor': 2,
      'for-direction': 2,
      'no-duplicate-case': 2,
      'no-empty-pattern': 2,
      'no-ex-assign': 2,
      'no-func-assign': 2,
      'block-scoped-var': 2,
      'func-style': [ 2, 'expression' ],
      'grouped-accessor-pairs': [ 1, 'getBeforeSet' ],
      'no-eq-null': 1,
      'no-eval': 1,
      'no-extra-semi': 2,
      'no-global-assign': 2,
      'no-multi-assign': 2,
      'no-nested-ternary': 2,
      'no-unneeded-ternary': 2,
      'no-return-await': 1,
      'no-script-url': 2,
      'no-shadow-restricted-names': 2,
      'no-with': 2,
      'quote-props': [ 1, 'as-needed' ],
      'require-await': 2,
      'block-spacing': 1,
      'brace-style': 1,
      'dot-location': [ 1, 'object' ],
      'no-tabs': 1,
      'no-whitespace-before-property': 2,
      'lines-between-class-members': [ 1, 'always' ],
      'nonblock-statement-body-position': [ 2, 'beside' ],
      'rest-spread-spacing': [ 2, 'never' ],
      'semi-spacing': 2,
      'semi-style': [ 2, 'last' ]
   }
};
var RuleTester = require('eslint').RuleTester
var rule = require('./').rules.underscore_case

var ruleTester = new RuleTester()
ruleTester.run('underscore_case', rule, {
  valid: [
    'var underscore_case = true;',
    'var Underscore_Case = true;',
    'function underscore_case(){}',
    'function Underscore_Case(){}'
  ],
  invalid: [
    {
      code: 'var underscoreCase',
      errors: [{ message: 'Identifiers must be underscore_case: underscoreCase' }]
    },
    {
      code: 'var UnderscoreCase',
      errors: [{ message: 'Identifiers must be underscore_case: UnderscoreCase' }]
    },
    {
      code: 'function underscoreCase(){}',
      errors: [{ message: 'Identifiers must be underscore_case: underscoreCase' }]
    },
    {
      code: 'function UnderscoreCase(){}',
      errors: [{ message: 'Identifiers must be underscore_case: UnderscoreCase' }]
    }
  ]
})

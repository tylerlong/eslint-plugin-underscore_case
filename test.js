var RuleTester = require('eslint').RuleTester
var rule = require('./').rules.underscore_case

var ruleTester = new RuleTester()
ruleTester.run('underscore_case', rule, {
  valid: [
    'var Underscore_Case = true;',
    'function another_underscore_case(){}',
    'function SomeClass() {}',
    'new SomeClass()',
    'SomeClass.method()'
  ],
  invalid: [{
    code: 'var notUnderscoreCase',
    errors: [{ message: 'Identifiers must be underscore_case: notUnderscoreCase', fix: { text: 'not_underscore_case' } }]
  }]
})

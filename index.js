function isClassUsage (node) {
  return ['FunctionDeclaration', 'NewExpression', 'MemberExpression'].indexOf(node.parent.type) > -1
}

module.exports = {
  rules: {
    underscore_case: {
      meta: {
        fixable: true
      },
      create (context) {
        return {
          Identifier (node) {
            var name = node.name
            var split = name.split(/(?=[a-z][A-Z])/)
            if (split.length > 1) {
              if (isClassUsage(node)) {
                return true
              }
              context.report({
                message: 'Identifiers must be underscore_case: {{ identifier }}',
                node: node,
                data: {
                  identifier: node.name
                }
              })
            }
          }
        }
      }
    }
  }
}

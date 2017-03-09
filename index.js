module.exports = {
  rules: {
    underscore_case: {
      meta: {
        fixable: false
      },
      create (context) {
        return {
          Identifier (node) {
            var name = node.name
            var split = name.split(/(?=[a-z][A-Z])/)
            if (split.length > 1) {
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

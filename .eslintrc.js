module.exports = {
    extends: [
        '@vue/eslint-config-airbnb',
        'plugin:vue/essential',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-param-reassign': 0,
        indent: ['error', 4],
        semi: [2, 'never'],
        'import/extensions': ['error', 'never'],
        'space-before-function-paren': ['error', 'always'],
        'import/no-named-as-default': 0,
        'function-paren-newline': ['error', 'consistent'],
        'vue/html-indent': 0,
        'vue/attributes-order': 0,
        'no-unused-expressions': 0,
        'vue/name-property-casing': ['error', 'kebab-case'],
        'vue/max-attributes-per-line': [2, {
            singleline: 1,
            multiline: {
                max: 1,
                allowFirstLine: true,
            },
        }],
        'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
        'vue/no-use-v-if-with-v-for': 0,
    },
}

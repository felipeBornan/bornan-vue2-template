module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint',
        'prettier',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'max-len': ['warn', { code: 150 }],
        '@typescript-eslint/no-var-requires': 0
    }
};

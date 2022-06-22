const createConfig = require('@titicaca/eslint-config-triple/create-config')

const { extends: extendConfigs, overrides } = createConfig({
  type: 'node',
  project: './tsconfig.json',
})

module.exports = {
  extends: [...extendConfigs],
  overrides: [...overrides],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
}

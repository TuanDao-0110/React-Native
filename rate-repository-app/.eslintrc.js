module.exports =
{
  'plugins': ['react', 'react-native'],
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  'extends': ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-native/all'],
  'parser': '@babel/eslint-parser',
  'env': {
    'react-native/react-native': true
  },
  'rules': {
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'jsx-quotes' : ['error', 'prefer-single'],
    'quotes' : ['error', 'single'],
    'react-native/no-color-literals': 0,
    'react-native/sort-styles' :0,

  }
}


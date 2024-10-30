module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["@babel/plugin-transform-private-methods", { "loose": true }],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.jsx',
          '.json',
        ],
        alias: {
          tests: ['./tests/'],
          '@Screens': './src/screens',
          '@Shared': './src/shared',
          '@Navigation': './src/navigation',
          '@Store': './src/store',
          '@Components': './src/components',
          '@Containers': './src/containers',
          '@Common': './src/common',
        },
      },
    ],
  ],
};

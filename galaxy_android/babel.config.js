// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
// };


//configure by akash for paper deployment

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
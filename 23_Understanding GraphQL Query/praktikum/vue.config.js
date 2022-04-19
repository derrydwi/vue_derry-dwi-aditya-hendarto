// const { defineConfig } = require('@vue/cli-service');
// module.exports = defineConfig({
//   transpileDependencies: true,
// });

// module.exports = {
//   chainWebpack: (config) => {
//     config.module
//       .rule('vue')
//       .use('vue-loader')
//       .loader('vue-loader')
//       .tap((options) => {
//         options.transpileOptions = {
//           transforms: {
//             dangerousTaggedTemplateString: true,
//           },
//         };
//         return options;
//       });
//   },
//   loaders: [
//     {
//       test: /\.(graphql|gql)$/,
//       exclude: /node_modules/,
//       loader: 'graphql-tag/loader',
//     },
//   ],
// };

module.exports = {
  chainWebpack: (config) => {
    // GraphQL Loader
    config.module
      .rule('graphql')
      .test(/\.(graphql|gql)$/)
      .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end();
  },
};

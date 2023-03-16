module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    }, 
  ], addons: ['@chakra-ui/storybook-addon'],features: {
    emotionAlias: false,
  },
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.css$/i,
  //     use: [
  //       {
  //         loader: 'postcss-loader',
  //         options: { implementation: require.resolve('postcss') },
  //       },
  //     ],
  //     include: path.resolve(__dirname, '../'),
  //   })
  //   // Return the altered config
  //   return config
  // },
}

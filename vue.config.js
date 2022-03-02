const { defineConfig } = require('@vue/cli-service');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const ENV = process.env.NODE_ENV;

module.exports = defineConfig({
  publicPath: ENV === 'development' ? '' : '/nextdebug-vue/', // Github Pages设置
  // publicPath: '',
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin(),
    ],
  },
});

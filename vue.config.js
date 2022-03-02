const { defineConfig } = require('@vue/cli-service');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    performance: {
      hints: 'warning',
      // 入口起点的最大体积
      maxEntrypointSize: 50000000,
      // 生成文件的最大体积
      maxAssetSize: 30000000,
      // 只给出 js 文件的性能提示
      assetFilter(assetFilename) {
        return assetFilename.endsWith('.js');
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('service', resolve('src/service'))
      .set('store', resolve('src/store'))
      .set('layout', resolve('src/layout'))
      .set('utils', resolve('src/utils'))
      .set('views', resolve('src/views'))
      .set('router', resolve('src/router'));
  },
});

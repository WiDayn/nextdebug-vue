const path = require('path');

module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    performance: {
      hints: 'warning',
      maxEntrypointSize: 50000000,
      maxAssetSize: 30000000,
      assetFilter(assetFilename) {
        return assetFilename.endsWith('.js');
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.join(__dirname, 'src'));
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        pathRewrite: {
          '/api': '',
        },
      },
    },
  },
};

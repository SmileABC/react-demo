// const path = require('path');
const CracoAlias = require("craco-alias");
// const sassResourcesLoader = require('craco-sass-resources-loader');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
   　　　baseUrl: "./src",
     　　　tsConfigPath: "./tsconfig.extend.json",
     　　}
    }
    // {
    //   plugin: sassResourcesLoader,
    //   options: {
    //     resources: [
    //       './src/my-config-theme.scss',   // 全局的scss文件可以放在这里
    //       './src/my-other-config-theme.scss'
    //     ],
    //   },
    // },
  ],
  devServer: (devServerConfig) => {
    return {
      ...devServerConfig,
      // 服务开启gzip
      compress: true,
      proxy: {
        '/api': {
          target: 'https://test.com/',
          changeOrigin: true,
          xfwd: false,
        }
      }
    }
  }
};
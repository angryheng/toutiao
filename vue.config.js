module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        common: '@/utils',
        components: '@/components',
        network: '@/network',
        views: '@/views'
      }
    }
  }
}

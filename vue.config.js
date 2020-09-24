module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        utils: '@/utils',
        components: '@/components',
        network: '@/network',
        views: '@/views',
        api: '@/api'
      }
    }
  }
}

module.exports = {
  configureWebpack: {
    resolve: {
      assets: '@/assets',
      common: '@/utils',
      components: '@/components',
      network: '@/network',
      views: '@/views'
    }
  }
}

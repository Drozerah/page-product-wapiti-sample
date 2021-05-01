module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/scss/style.scss";'
      }
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'My APP'
        return args
      })
  }
}

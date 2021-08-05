module.exports = {
  css: {
    modules: true,
    sourceMap: true,
    loaderOptions: {
      sass: {
        additionalData: '@import "@/styles/base.scss";'
      }
    }
  }
}

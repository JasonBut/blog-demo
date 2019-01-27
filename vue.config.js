module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/blog-demo/'
    : './',
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/Assets/Styles/common-variables.scss";
        `
      }
    }
  }
};

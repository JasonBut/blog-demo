module.exports = {
  publicPath: './',
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

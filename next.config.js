const isProd = (process.env.NODE_ENV || "production") === "production";
module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    }
  },
  assetPrefix: isProd ? "https://noahr02.github.io/portfolio" : "",
}
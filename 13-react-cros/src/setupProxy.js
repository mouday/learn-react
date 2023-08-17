const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api-student",
    createProxyMiddleware({
      // 触发代理的请求前缀
      target: "http://127.0.0.1:5000", // 转发目标地址
      changeOrigin: true, // 修改请求头中的Host字段
      pathRewrite: {
        "^/api-student": "", // 重写请求路径
      },
    })
  );

  app.use(
    "/api-car",
    createProxyMiddleware({
      target: "http://127.0.0.1:5001",
      changeOrigin: true,
      pathRewrite: {
        "^/api-car": "",
      },
    })
  );
};

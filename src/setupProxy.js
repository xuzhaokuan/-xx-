
const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', createProxyMiddleware({ 
    target: 'http://api.7-orange.cn:7300/mock/5def6a2d448e330a1116366e/api', 
    changeOrigin: true,
    pathRewrite:{
    '^/api': '/'
  } 
}));
};
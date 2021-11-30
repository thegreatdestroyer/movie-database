const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    app.use('/api', createProxyMiddleware({
        target: 'https://imdb8.p.rapidapi.com',
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
    }));
};

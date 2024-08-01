const http = require('http');
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});
const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: 'http://freeuploaderfileccprojects.html-5.me' });
});
server.listen(8080, () => {
  console.log('Proxy server is running on http://localhost:8080');
});

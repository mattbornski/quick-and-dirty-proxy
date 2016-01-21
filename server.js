#!/usr/bin/env node

var http = require('http')
var httpProxy = require('http-proxy')

var localPort = process.env.LOCAL_PORT || 8000
var remoteServer = process.env.REMOTE_SERVER || 'www.google.com'

var proxy = new httpProxy.HttpProxy({ 
  target: {
    host: remoteServer, 
    port: 443,
    https: true
  }
});

http.createServer(function (req, res) {
  console.log(req.method + " " + req.url)
  for (var header in req.headers) {
  	console.log(header + ": " + req.headers[header])
  }
  console.log("")
  console.log(req.body)

  proxy.proxyRequest(req, res)
}).listen(localPort)

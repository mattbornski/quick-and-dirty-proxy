#!/usr/bin/env node

var httpProxy = require('http-proxy');
var proxyByUrl = require('proxy-by-url');

var port = process.env.PORT || 8000;

var routing = {
	'/': {
		'port': process.env.FORWARD_PORT || 80,
		'host': process.env.FORWARD_HOST || 'www.google.com',
	},
}

var server = httpProxy.createServer(proxyByUrl(routing)).listen(port);

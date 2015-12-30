// Variable definition

// Including the configuration file
var		config = require('./config.js');

// Loading other necessary modules
var    	console = require('util'),
		fs = require('fs'),
		url = require ('url'),
		https = require('https');

var options = {
    key: fs.readFileSync(config.key),
    cert: fs.readFileSync(config.cert)
};

https.createServer(options, function (request, response) {

   	var ip = request.connection.remoteAddress ;
 	var path= request.url;
  	var method = url.parse(request.url);

  	console.log ('INFO: Requesting ' + request.url + ' from ' + ip);

if (method.pathname == "/launch" )
	{
		response.writeHead(200);
		response.write ('Launching dice\n\n');

	 }

if (method.pathname == "/")
	 {

	 	var index = require('./pages/index.js');

	 	response.writeHead(200);
	 	response.write (index.content);

	 }

response.end();

}).listen(config.port);

console.log('#####################################');
console.log('Launching ' + config.process_title + ' node application');
console.log('Current version is ' + config.process_version + ', propeled by node.js ' + process.version);
console.log('Agent is listening on port ' + config.port + " through https protocol");
console.log('If anything, send an email to ' + config.contact_email);
console.log('#####################################');
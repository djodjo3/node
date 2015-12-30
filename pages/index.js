
var fs = require('fs'),
	index = {} ;
 
index.content=fs.readFileSync('./pages/index.html');

module.exports = index;
// Configuration file for node.js application

var config = {} ;
 
// HTTPS Configuration
config.port=8124;
config.cert='cert.pem';
config.key='key.pem';

config.process_title= 'PrestaShop Agent MkI';
config.process_version= 'Alpha 0.01';

config.contact_email='devops@prestashop.com';

module.exports = config;
var mod = angular.module('states.main.app.client', []);

require('./client.states.js').load(mod);
require('./client-index.controller.js').load(mod);

module.exports = mod;
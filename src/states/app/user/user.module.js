var mod = angular.module('states.main.app.user', []);

require('./user.states.js').load(mod);
require('./user-index.controller.js').load(mod);

module.exports = mod;
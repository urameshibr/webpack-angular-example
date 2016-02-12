var loginTemplate = require('./login.tpl.html');

var mod = angular.module('states.main.outside.login', []);

require('./login.controller.js').load(mod);

/** @ngInject */
mod.config(function ($stateProvider) {

    $stateProvider.state('outside.login', {
        url: '/login',
        templateUrl: loginTemplate,
        controller: 'LoginController',
        controllerAs: 'vm'
    });
});

module.exports = mod;
var error404Template = require('./404.tpl.html');

var mod = angular.module('states.main.outside.404', []);

require('./404.controller.js').load(mod);

/** @ngInject */
mod.config(function ($stateProvider) {

    $stateProvider.state("outside.404", {
        templateUrl: error404Template,
        controller: 'Error404Controller',
        controllerAs: 'vm'
    });

});

module.exports = mod;
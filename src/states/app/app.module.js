var controller = require('./app.controller.js');
var appTemplate = require('./app.tpl.html');

var mod = angular.module('states.main.app', [
    require('./client/client.module.js').name,
    require('./user/user.module.js').name
]);

/** @ngInject */
mod.config(function ($stateProvider) {

    $stateProvider.state("app", {
            abstract: true,
            templateUrl: appTemplate,
            controller: controller,
            controllerAs: "app"
        });

    $stateProvider.state("app.home-slash", {
        url: '/',
        /** @ngInject */
        onEnter: function ($state){
            $state.go('app.home');
        }
    });

    $stateProvider.state("app.home", {
        url: '',
        /** @ngInject */
        onEnter: function ($state){
            $state.go('app.client');
        }
    });

});

module.exports = mod;
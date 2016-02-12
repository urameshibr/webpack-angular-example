var mod = angular.module('states.main.outside', [
    require('./login/login.module.js').name,
    require('./404/404.module.js').name
]);

/** @ngInject */
mod.config(function ($stateProvider) {

    var templateString = '<ui-view></ui-view>';

    $stateProvider
        .state("outside", {
            abstract: true,
            template: templateString
        });
});

module.exports = mod;
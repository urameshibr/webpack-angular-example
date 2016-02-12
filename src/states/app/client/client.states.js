var indexTemplate = require('./client-index.tpl.html');

module.exports.load = function (mod) {
    mod.config(states);
};

/** @ngInject */
function states($stateProvider) {

    $stateProvider.state("app.client", {
        url: "/clientes",
        templateUrl: indexTemplate,
        controller: 'ClientIndexController',
        controllerAs: 'vm'
    });

}
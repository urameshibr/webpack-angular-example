var indexTemplate = require('./user-index.tpl-async.html');

module.exports.load = function (mod) {
    mod.config(states);
};

/** @ngInject */
function states($stateProvider) {

    $stateProvider.state("app.user", {
        url: "/users",
        templateUrl: indexTemplate,
        controller: 'UserIndexController',
        controllerAs: 'vm'
    });

}
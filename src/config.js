module.exports.load = function (mod) {
    mod.config(config);
};

/** @ngInject */
function config($logProvider, $urlRouterProvider, uibPaginationConfig) {

    // Enable log
    $logProvider.debugEnabled(true);

    //Default route
    $urlRouterProvider.otherwise(function ($injector) {
        var $state = $injector.get("$state");
        $state.go("outside.404");
    });

    //pagination
    uibPaginationConfig.previousText = "«";
    uibPaginationConfig.nextText = "»";
    uibPaginationConfig.firstText = "Primeiro";
    uibPaginationConfig.lastText = "Último";
}
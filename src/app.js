var angular = require('angular');

//angular dependences
require('angular-ui-router');
require('angular-ui-bootstrap');

// styles
require('bootstrap/less/bootstrap.less');
require('./app.less');

var app = angular.module('myApp', [

    /*
     * Dependences
     */
    'ui.router', // state routing
    'ui.bootstrap', // no jquery bootstrap components

    /*
     * App modules
     */
    // angular pt-br locale
    require('./components/angular-locales/pt-br.module').name,

    // States (main state requires child states and so on)
    require('./states/main.module.js').name

]);

//global config
require('./config').load(app);

//constants
app.constant('API_CONSTANTS', {
    baseUrl: '/api'
});
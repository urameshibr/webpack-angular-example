module.exports.load = function (mod) {
    mod.controller('LoginController', LoginController);
};

/** @ngInject */
function LoginController() {

    var vm = this;

    // Attributes
    vm.loginFailed = false;

    // Methods
    vm.login = login;

    function login(username, password) {
        //login
    }


}
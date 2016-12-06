var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var MainController = (function () {
            function MainController($state) {
                this.$state = $state;
            }
            return MainController;
        }());
        Controllers.MainController = MainController;
        angular.module('MyApp').controller('MainController', MainController);
        var Page1Controller = (function () {
            function Page1Controller() {
                this.message = 'Hello from Page1!!!';
            }
            return Page1Controller;
        }());
        Controllers.Page1Controller = Page1Controller;
        var Page2Controller = (function () {
            function Page2Controller($state) {
                this.$state = $state;
                this.message = 'Hello from Page2!!!';
            }
            Page2Controller.prototype.doSomething = function () {
                this.$state.go('Page1');
            };
            return Page2Controller;
        }());
        Controllers.Page2Controller = Page2Controller;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));

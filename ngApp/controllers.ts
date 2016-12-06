/// <reference path="node_modules\@types\angular\index.d.ts" />
/// <reference path="node_modules\@types\angular-route\index.d.ts" />

namespace MyApp.Controllers {

    export class MainController {
        constructor(public $state: ng.ui.IStateService) { }
    }
    angular.module('MyApp').controller('MainController', MainController);

    export class Page1Controller {
        public message = 'Hello from Page1!!!';
    }

    export class Page2Controller {
        public message = 'Hello from Page2!!!';

        doSomething() {
            this.$state.go('Page1');
        }

        constructor(private $state: ng.ui.IStateService) { }
    }
}

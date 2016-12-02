/// <reference path="Typings\angularjs\angular.d.ts" />
/// <reference path="node_modules\@types\angular-route\index.d.ts" />
namespace MyApp {

    angular.module('MyApp', ['ui.router']).config(($stateProvider: ng.ui.IStateProvider, $locationProvider: ng.ILocationProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
        $stateProvider.state('Home', {
            url: '/',
            templateUrl: '/ngApp/products.html',
            controller: MyApp.Controllers.ProductListController,
            controllerAs: 'controller'
        }).state('Details', {
            url: '/details/:id',
            templateUrl: '/ngApp/details.html',
            controller: MyApp.Controllers.ProductDetailsController,
            controllerAs: 'controller'
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    });

}

namespace MyApp.Controllers {

    let products = [
        { id: 1, name: 'Milk', price: 5.00 },
        { id: 2, name: 'Cheese', price: 17.00 },
        { id: 3, name: 'Apples', price: 3.40 }
    ];

    export class ProductListController {
        public products = products;
    }


    export class ProductDetailsController {
        public product;

        constructor($stateParams: ng.ui.IStateParamsService) {
            this.product = products.filter((p) => p.id == $stateParams['id'])[0];
        }
    }

}

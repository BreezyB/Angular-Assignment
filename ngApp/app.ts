

namespace Myrouterapp {
  angular.module("MyApp",['ui.router'])
      .config(($stateProvider: ng.ui.IStateProvider, $locationProvider:ng.ILocationProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) => {
        $stateProvider
//          .state('Page1', {
//            url:'/page1',
//            templateUrl: 'templates/page1.html',
//            controller: Myrouterapp.Controllers.MainController,
//            controllerAs: 'controller'
//          });
      });
}

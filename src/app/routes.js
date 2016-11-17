import 'angular-route';
// import 'angular-ui-router';


export function routes($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: true,
    });

    $routeProvider.when('/',{
      templateUrl: '/app/views/index.html',
      controller: 'indexController',
    }).
    when('/album-detail/:albumId', {
      templateUrl: '/app/views/album-detail.html',
      controller: 'albumDetailController'
    })
    .when('/band-albums/:bandId', {
      templateUrl: '/app/views/band-albums.html',
      controller:'bandAlbumsController'
    })
    .when('/results/:search', {
      templateUrl: '/app/views/results.html',
      controller: 'resultsController'
    });
}

// export function routes($stateProvider, $urlRouterProvider){
//   $stateProvider
//     .state('index', {
//       url:'/',
//       templateUrl: 'app/views/index.html',
//       controller: 'indexController'
//     })
//     .state('results', {
//       url: '/results',
//       templateUrl: 'app/views/results.html',
//       controller: 'resultsController'
//     })
//     .state('album-detail', {
//       url: '/album-detail',
//       templateUrl: 'app/views/album-detail.html'
//     })
//     .state('band-almbums', {
//       url: '/band-albums',
//       templateUrl: 'app/views/band-almbums.html'
//     });
//
//     $urlRouterProvider.otherwise('/');
//
// }

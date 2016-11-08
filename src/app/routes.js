import 'angular-route';

export function routes($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: true,
    });

    $routeProvider.when('/',{
      templateUrl: 'app/views/index.html',
      controller: 'indexController'
    }).
    when('/album-detail', {
      templateUrl: 'app/views/album-detail.html'
    })
    .when('/band-albums', {
      templateUrl: 'app/views/band-album'
    })
    .when('/results', {
      templateUrl: 'app/views/results.html'
    });
}

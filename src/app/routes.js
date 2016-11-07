import 'angular-route';

export function routes($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: true,
    });

    $routeProvider.when('/',{
      templateUrl: 'app/views/index.html'
    }).
    when('/album-detail', {
      templateUrl: 'views/album-detail.html'
    });
}

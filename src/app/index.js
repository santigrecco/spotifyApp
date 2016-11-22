import {routes} from './routes';
import {ApiService, State} from './services';
import {indexController, resultsController, bandAlbumsController, headerController,
footerPlayerController } from './controller';
import {albumDetailController} from './controller';
import {ArtistDirective} from './directives/artists';
import {inputComponent} from './components/input';
import {starComponent} from './components/star';
import {StarDirective} from './directives/star';
import {PlayStopDirective} from './directives/playStop';
import 'angular-cookies';
import 'angular-animate';


angular.module('App', ['ngRoute', 'ngCookies', 'ngAnimate'])
    .config(routes)
    .service('ApiService', ApiService)
    .service('State', State)
    .directive('artists', ArtistDirective)
    .directive('star', StarDirective)
    .directive('playStop', PlayStopDirective)
    .component('inputComponent', inputComponent)
    .controller('indexController', indexController)
    .controller('resultsController', resultsController)
    .controller('bandAlbumsController', bandAlbumsController)
    .controller('albumDetailController', albumDetailController)
    .controller('headerController', headerController)
    .controller('footerPlayerController', footerPlayerController);


    angular.module('App')
        .run(function($rootScope){
            $rootScope.$on('$locationChangeStart',
             function(event, next, current){
                if(routeToIndex(next) < routeToIndex(current)){
                    document.getElementsByClassName('container')[0]
                        .classList.add('backward');
                }
            })


        });

function routeToIndex (route){
    let routes = {
        '/': 0,
        '/results':1,
        '/band-album':2,
        '/album-detail':3
    };
    if(route.indexOf('/album-detail') != -1){
        return routes['/album-detail'];
    }
    if(route.indexOf('/band-album')!= -1){
        return routes['/band-album'];
    }
    if(route.indexOf('/results')!= -1){
        return routes['/results'];
    }else{
        return routes['/'];
    }

}

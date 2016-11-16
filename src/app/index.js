import {routes} from './routes';
import {ApiService, State} from './services';
import {indexController, resultsController, bandAlbumsController} from './controller';
import {ArtistDirective} from './directives/artists';
import {inputComponent} from './components/input';
import 'angular-cookies';
import 'angular-animate';


angular.module('App', ['ngRoute', 'ngCookies', 'ngAnimate'])
    .config(routes)
    .service('ApiService', ApiService)
    .service('State', State)
    .directive('artists', ArtistDirective)
    .component('inputComponent', inputComponent)
    .controller('indexController', indexController)
    .controller('resultsController', resultsController)
    .controller('bandAlbumsController', bandAlbumsController);

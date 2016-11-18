import {routes} from './routes';
import {ApiService, State} from './services';
import {indexController, resultsController, bandAlbumsController } from './controller';
import {albumDetailController} from './controller';
import {ArtistDirective} from './directives/artists';
import {inputComponent} from './components/input';
import {starComponent} from './components/star';
import {StarDirective} from './directives/star';
import 'angular-cookies';
import 'angular-animate';


angular.module('App', ['ngRoute', 'ngCookies', 'ngAnimate'])
    .config(routes)
    .service('ApiService', ApiService)
    .service('State', State)
    .directive('artists', ArtistDirective)
    .directive('star', StarDirective)
    .component('inputComponent', inputComponent)
    // .component('star', starComponent)
    .controller('indexController', indexController)
    .controller('resultsController', resultsController)
    .controller('bandAlbumsController', bandAlbumsController)
    .controller('albumDetailController', albumDetailController);

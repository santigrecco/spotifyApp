import {routes} from './routes';
import {ApiService} from './services';
import {State} from './services';
import {indexController} from './controller';
import {resultsController} from './controller';
import 'angular-cookies';
import 'angular-animate';


angular.module('App', ['ngRoute', 'ngCookies', 'ngAnimate'])
    .config(routes)
    .service('ApiService', ApiService)
    .service('State', State)
    .controller('indexController', indexController)
    .controller('resultsController', resultsController);

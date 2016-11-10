import {routes} from './routes';
import {ApiService} from './services';
import {indexController} from './controller/index-controller';
import {State} from './services';
import 'angular-cookies';

angular.module('App', ['ngRoute', 'ngCookies'])
    .config(routes)
    .service('ApiService', ApiService)
    .service('State', State)
    .controller('indexController',indexController);

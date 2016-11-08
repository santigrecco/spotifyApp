import {routes} from './routes';
import {ApiService} from './services';
import {indexController} from './controller/index-controller';

angular.module('App', ['ngRoute'])
    .config(routes)
    .service('ApiService', ApiService)
    .controller('indexController',indexController);
    

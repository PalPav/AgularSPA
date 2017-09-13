import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'

import angular from 'angular';
import router from '@uirouter/angularjs';

import config from './config/app';
import home from './features/home'


angular.module('app', [router, home]).config(config);
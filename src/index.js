import './index.css';
import angular from 'angular';
import ApiService from './apiService';
import MovieListController from './MovieListController';

angular.module("MovieCatalogueApp", [])
.factory("ApiService", ['$http', '$log', ApiService])
.controller("MovieListController", ['$scope', 'ApiService', MovieListController])
.component('movieList', {
  template: require('./movieList.html'),
  controller: MovieListController
});

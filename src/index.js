import './index.css';
import angular from 'angular';
import MovieListController from './MovieListController';

angular.module("MovieCatalogueApp", [])
.controller("MovieListController", ['$scope', '$http', MovieListController])
.component('movieList', {
  template: require('./movieList.html'),
  controller: MovieListController
});

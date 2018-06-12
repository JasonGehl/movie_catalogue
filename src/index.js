import './index.css';
import angular from 'angular';
import ApiService from './apiService';
import MovieListController from './MovieListController';
import AddMovieController from './AddMovieController';

angular.module("MovieCatalogueApp", [])
.factory("ApiService", ['$http', '$log', ApiService])
.controller("MovieListController", ['$scope', 'ApiService', MovieListController])
.controller("AddMovieController", ['$scope', 'ApiService', AddMovieController])
.component('movieList', {
  template: require('./movieList.html'),
  controller: MovieListController
})
.component('addMovie', {
  template: require('./addMovie.html'),
  controller: AddMovieController
});


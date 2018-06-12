import './index.css';
import angular from 'angular';
import ApiService from './api/apiService';
import MovieListController from './MovieListController';
import AddMovieController from './AddMovieController';
import MovieSearchController from './MovieSearchController';

angular.module("MovieCatalogueApp", [])
.factory("ApiService", ['$http', '$log', ApiService])
.controller("MovieListController", ['$scope', 'ApiService', MovieListController])
.controller("AddMovieController", ['$scope', 'ApiService', AddMovieController])
.controller("MovieSearchController", ['$scope', 'ApiService', MovieSearchController])
.component('movieList', {
  template: require('./movieList.html'),
  controller: MovieListController
})
.component('addMovie', {
  template: require('./addMovie.html'),
  controller: AddMovieController
})
.component('movieSearch', {
  template: require('./movieSearch.html'),
  controller: MovieSearchController
});


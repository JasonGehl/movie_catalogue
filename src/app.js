import './index.css';
import angular from 'angular';
import ngRoute from 'angular-route'; //eslint-disable-line no-unused-vars
import ApiService from './api/apiService';
import FullCatalogueListController from './FullCatalogueListController';
import AddMovieController from './addMovie/AddMovieController';
import MovieSearchController from './searchMovies/MovieSearchController';

angular.module("MovieCatalogueApp", ['ngRoute'])
.config(function($routeProvider){
  $routeProvider
    .when("/allMovies", {
      template: require('./fullCatalogueList.html'),
      controller: FullCatalogueListController
    })
    .when("/addMovie", {
      template: require('./addMovie/addMovie.html'),
      controller: AddMovieController
    })
    .when("/searchMovies", {
      template: require('./searchMovies/movieSearch.html'),
      controller: MovieSearchController
    })
    .otherwise({redirectTo:"/allMovies"});
})
.factory("ApiService", ['$http', '$log', ApiService])
.controller("FullCatalogueListController", ['$scope', 'ApiService', FullCatalogueListController])
.controller("AddMovieController", ['$scope', 'ApiService', AddMovieController])
.controller("MovieSearchController", ['$scope', 'ApiService', MovieSearchController])
.directive("movieList", function(){
  return {
    template: require('./movieList.directive.html')
  }
});

import './index.css';
import angular from 'angular';
import ApiService from './api/apiService';
import FullCatalogueListController from './FullCatalogueListController';
import AddMovieController from './AddMovieController';
import MovieSearchController from './MovieSearchController';

angular.module("MovieCatalogueApp", [])
.factory("ApiService", ['$http', '$log', ApiService])
.controller("FullCatalogueListController", ['$scope', 'ApiService', FullCatalogueListController])
.controller("AddMovieController", ['$scope', 'ApiService', AddMovieController])
.controller("MovieSearchController", ['$scope', 'ApiService', MovieSearchController])
.directive("movieList", function(){
  return {
    template: require('./movieList.html')
  }
})
.component('fullCatalogueList', {
  template: require('./fullCatalogueList.html'),
  controller: FullCatalogueListController
})
.component('addMovie', {
  template: require('./addMovie.html'),
  controller: AddMovieController
})
.component('movieSearch', {
  template: require('./movieSearch.html'),
  controller: MovieSearchController
});

import './index.css';
import angular from 'angular';
import MovieController from './movieController';


let app = angular.module("MovieCatalogueApp", []);

app.controller("MovieController", ['$scope', '$http', MovieController]);
app.component('movieList', {
  template: require('./movieList.component.html'),
  controller: MovieController
});

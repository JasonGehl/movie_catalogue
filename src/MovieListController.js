export default function MovieListController($scope, ApiService){
  const onMoviesGetComplete = function(movieData){
    $scope.movies = movieData;
    $scope.showList = true;
  }

  const onError = function(err){
    $scope.error = err;
  }

  $scope.getMovies = function(){
    ApiService.getMovies().then(onMoviesGetComplete, onError);
  }
  $scope.movieSortOptions = [
    {'name': 'Title (asc)', 'sort': '+title'},
    {'name': 'Title (desc)', 'sort': '-title'},
    {'name': 'Year Released (asc)', 'sort': '+yearReleased'},
    {'name': 'Year Released (desc)', 'sort': '-yearReleased'}
  ];
  $scope.movieSortOrder = '+title';

  $scope.showList = false;
  $scope.getMovies();
}

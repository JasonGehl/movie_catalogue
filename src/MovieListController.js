export default function MovieListController($scope, $http){
  const DATABASE_LOCATION = 'http://localhost:3001';

  const onMoviesGetComplete = function(response){
    $scope.movies = response.data;
    $scope.showList = true;
  }

  const onError = function(err){
    $scope.error = err;
  }

  $scope.getMovies = function(){
    $http.get(DATABASE_LOCATION + '/movies').then(onMoviesGetComplete, onError);
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

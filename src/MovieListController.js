export default function MovieListController($scope, $http){
  $scope.movies = [];

  const DATABASE_LOCATION = 'http://localhost:3001';

  const onMoviesGetComplete = function(response){
    response.data.forEach(movie => {
      $scope.movies.push(movie);
    });
  }

  const onError = function(err){
    $scope.error = err;
  }

  $scope.getMovies = function(){
    $http.get(DATABASE_LOCATION + '/movies').then(onMoviesGetComplete, onError);
  }

  $scope.message = "Hello!";
  $scope.getMovies();
}

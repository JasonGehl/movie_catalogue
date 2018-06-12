export default function AddMovieController($scope, ApiService){
  const onMovieSaveComplete = function(response){
    //refresh movie list
  }

  const onError = function(err){
    $scope.error = err;
  }

  $scope.showAddMovie = false;

  $scope.showHideAddMovie = () => {
    $scope.showAddMovie = !$scope.showAddMovie;
  }

  $scope.saveMovie = function(formData){
    //jsonify form data
    ApiService.addMovie(formData).then(onMovieSaveComplete, onError);
  }
}

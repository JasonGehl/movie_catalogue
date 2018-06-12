export default function AddMovieController($scope, ApiService){
  const onMovieSaveComplete = function(response){
    //refresh movie list
  }

  const onError = function(err){
    $scope.error = err;
  }

  $scope.showForm = false;

  $scope.saveMovie = function(formData){
    //jsonify form data
    ApiService.addMovie(formData).then(onMovieSaveComplete, onError);
  }
}

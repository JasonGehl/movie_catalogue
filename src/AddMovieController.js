export default function AddMovieController($scope, $http){
  const DATABASE_LOCATION = 'http://localhost:3001';

  const onMovieSaveComplete = function(response){
    //refresh movie list
  }

  const onError = function(err){
    $scope.error = err;
  }

  $scope.showForm = false;

  $scope.saveMovie = function(){
    $http.post(DATABASE_LOCATION + '/movies').then(onMovieSaveComplete, onError);
  }
}

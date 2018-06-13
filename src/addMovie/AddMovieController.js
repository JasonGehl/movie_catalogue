export default function AddMovieController($scope, ApiService){
  const onMovieSaveComplete = function(){
    resetForm();
    //toast popup?
  }

  const onError = function(err){
    $scope.error = err;
  }

  const resetForm = function(){
    $scope.movie = {
      title: '',
      description: null,
      yearReleased: 2018,
      actors: [],
      genres: []
    };
    $scope.actors = '';
    $scope.genres = '';
  }

  const splitAndTrimify = function(stringToArray){
    let stringArray = stringToArray.split(',');
    return stringArray.map( x => x.trim());
  }

  $scope.movie = {
    title: '',
    description: null,
    yearReleased: 2018,
    actors: [],
    genres: []
  };

  $scope.actors = '';
  $scope.genres = '';

  $scope.saveMovie = function(){
    if($scope.title.length < 1){
      return;
    }

    if($scope.actors.length > 0){
      $scope.movie.actors = splitAndTrimify($scope.actors);
    }

    if($scope.genres.length > 0){
      $scope.movie.genres = splitAndTrimify($scope.genres);
    }
    const movieData = JSON.stringify($scope.movie);

    ApiService.addMovie(movieData).then(onMovieSaveComplete, onError);
  }
}

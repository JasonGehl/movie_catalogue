export default function AddMovieController($scope, ApiService){
  const onMovieSaveComplete = function(){
    resetForm();
    //toast popup for save success
  }

  const onError = function(err){
    $scope.error = err;
  }

  const resetForm = function(){
    //reset the scope/form for next addition
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
    //split the string into an array, then trim each entry
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
    //require title for saving
    if($scope.movie.title.length < 1){
      return;
    }

    //reformat actors and genres
    if($scope.actors.length > 0){
      $scope.movie.actors = splitAndTrimify($scope.actors);
    }

    if($scope.genres.length > 0){
      $scope.movie.genres = splitAndTrimify($scope.genres);
    }

    //stringify the JSON
    const movieData = JSON.stringify($scope.movie);

    //save the movie
    ApiService.addMovie(movieData).then(onMovieSaveComplete, onError);
  }
}

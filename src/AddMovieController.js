export default function AddMovieController($scope, ApiService){
  const onMovieSaveComplete = function(response){
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

  const onError = function(err){
    $scope.error = err;
  }

  $scope.showAddMovie = false;

  $scope.showHideAddMovie = () => {
    $scope.showAddMovie = !$scope.showAddMovie;
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
    //jsonify form data
    if($scope.actors.length > 0){
      let actorArray = $scope.actors.split(',');
      actorArray.forEach(function(actorName, index, arr){
        arr[index] = actorName.trim();
      });
      $scope.movie.actors = actorArray;
    }
    if($scope.genres.length > 0){
      let genreArray = $scope.genres.split(',');
      genreArray.forEach(function(genreName, index, arr){
        arr[index] = genreName.trim();
      });
      $scope.movie.genres = genreArray;
    }
    const movieData = JSON.stringify($scope.movie);

    ApiService.addMovie(movieData).then(onMovieSaveComplete, onError);
  }
}

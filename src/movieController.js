export default function MovieController($scope, $http){
  $scope.movies = [];


  const onMoviesGetComplete = function(response){
    response.movies.forEach(movie => {
      $scope.movies.push(movie);
    });
  }

  const onError = function(err){
    $scope.error = err;
  }

  $scope.getMovies = function(){
    //$http.get('http://localhost:3001/movies').then(onMovieGetComplete, onError);
    let mockData = {
      "movies": [
        {
          "id": "1",
          "title": "The Shawshank Redemption",
          "description": "",
          "actors": ["Tim Robbins", "Morgan Freeman"],
          "genres": []
        }
      ]
    };

    onMoviesGetComplete(mockData);
  }

  $scope.message = "Hello!";
  $scope.getMovies();
}

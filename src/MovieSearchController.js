export default function MovieSearch($scope, ApiService){
  const onSearchComplete = function(movieData){
    console.log(movieData);
    $scope.movies = movieData;
    //show results
  }

  const onError = (err) => {
    $scope.error = err;
  }

  $scope.showSearch = false;

  $scope.showHideSearch = () => {
    $scope.showSearch = !$scope.showSearch;
  }

  $scope.movieSearchOptions = [
    {
      'searchOption': 'title',
      'name': 'By Title'
    },
    {
      'searchOption': 'actors',
      'name': 'By Actor'
    },
    {
      'searchOption': 'genres',
      'name': 'By Genre'
    }
  ];
  $scope.searchOption = 'title';
  $scope.searchQuery = '';

  $scope.search = () => {
    //jsonify form data
    if ($scope.searchQuery.length > 0) {
      ApiService.searchMovies($scope.searchOption, $scope.searchQuery).then(onSearchComplete, onError);
    }
  }
}

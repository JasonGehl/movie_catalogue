export default function MovieSearch($scope, ApiService){
  const onSearchComplete = function(movieData){
    console.log(movieData);
    //show results
  }

  const onError = function(err){
    $scope.error = err;
  }

  $scope.showSearch = false;
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

  $scope.search = function(){
    //jsonify form data
    if ($scope.searchQuery.length > 0) {
      ApiService.searchMovies($scope.searchOption, $scope.searchQuery).then(onSearchComplete, onError);
    }
  }
}

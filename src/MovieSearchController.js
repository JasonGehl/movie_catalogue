export default function MovieSearch($scope, ApiService){
  const onSearchComplete = function(movieData){
    console.log(movieData);
    $scope.movies = movieData;
    $scope.showList = true;
    //show results
  }

  const onError = (err) => {
    $scope.error = err;
  }

  $scope.showSearch = false;
  $scope.showList = false;
  $scope.movies = "";

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

  $scope.movieSortOptions = [
    {'name': 'Title (asc)', 'sort': '+title'},
    {'name': 'Title (desc)', 'sort': '-title'},
    {'name': 'Year Released (asc)', 'sort': '+yearReleased'},
    {'name': 'Year Released (desc)', 'sort': '-yearReleased'}
  ];
  $scope.movieSortOrder = '+title';
}

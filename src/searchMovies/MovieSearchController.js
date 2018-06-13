export default function MovieSearch($scope, ApiService){
  const onSearchComplete = function(movieData){
    //load movie data for list, show list
    $scope.movies = movieData;
    $scope.moviesLoaded = true;
    $scope.showList = true;
  }

  const onError = (err) => {
    $scope.error = err;
  }

  $scope.showList = false;
  $scope.movies = [];

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
    //hide list, if shown
    $scope.showList = false;

    //send search, if query text is entered
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

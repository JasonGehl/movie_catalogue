export default function FullCatalogueListController($scope, ApiService){
  const onMoviesGetComplete = function(movieData){
    $scope.movies = movieData;
  }

  const onError = (err) => {
    $scope.error = err;
  }

  $scope.showHideList = () => {
    if(!$scope.showList){
      $scope.getMovies();
    }
    $scope.showList = !$scope.showList;
  }

  $scope.getMovies = () => {
    ApiService.getMovies().then(onMoviesGetComplete, onError);
  }

  $scope.movieSortOptions = [
    {'name': 'Title (asc)', 'sort': '+title'},
    {'name': 'Title (desc)', 'sort': '-title'},
    {'name': 'Year Released (asc)', 'sort': '+yearReleased'},
    {'name': 'Year Released (desc)', 'sort': '-yearReleased'}
  ];
  $scope.movieSortOrder = '+title';

  $scope.showList = false;
}

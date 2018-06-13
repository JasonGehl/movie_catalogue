export default function FullCatalogueListController($scope, ApiService){
  const onMoviesGetComplete = function(movieData){
    $scope.movies = movieData;
    $scope.moviesLoaded = true;
  }

  const onError = (err) => {
    $scope.error = err;
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

  $scope.getMovies();
}

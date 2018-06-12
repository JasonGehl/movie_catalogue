export default function ApiService($http, $log){
  const DATABASE_LOCATION = 'http://localhost:3001';

  const getMovies = function(){
    return $http.get(DATABASE_LOCATION + '/movies').then(onMoviesGetComplete, onError);
  }

  const getMovieById = function(id){
    const encodedId = encodeURIComponent(id);
    return $http.get(DATABASE_LOCATION + '/movies?id=' + encodedId).then(onMoviesGetComplete, onError);
  }

  const getMoviesWithSearch = function(searchType, query){
    const encodedSearchType = encodeURIComponent(searchType);
    const encodedQuery = encodeURIComponent(query);
    return $http.get(DATABASE_LOCATION + '/movies?' + encodedSearchType + '_like=' + encodedQuery).then(onMoviesGetComplete, onError);
  }

  const onMoviesGetComplete = function(response){
    return response.data;
  }

  const onError = function(err){
    $log.error(err);
    return err;
  }

  return {
    getMovies: getMovies,
    getMovieById: getMovieById,
    searchMovies: getMoviesWithSearch
  };
}

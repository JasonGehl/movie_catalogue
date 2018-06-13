export default function ApiService($http, $log){
  //server location (need to change to not hard coded string)
  const DATABASE_LOCATION = 'http://localhost:3001';

  //getMovies: get all movie information
  const getMovies = () => {
    return $http.get(DATABASE_LOCATION + '/movies').then(onMoviesGetComplete, onError);
  }

  //getMovieById: get movie info for one movie
  const getMovieById = function(id){
    const encodedId = encodeURIComponent(id);
    return $http.get(DATABASE_LOCATION + '/movies?id=' + encodedId).then(onMoviesGetComplete, onError);
  }

  //getMoviesWithSearch: retrieve movies based on query string
  const getMoviesWithSearch = function(searchType, query){
    const encodedSearchType = encodeURIComponent(searchType);
    const encodedQuery = encodeURIComponent(query);
    return $http.get(DATABASE_LOCATION + '/movies?' + encodedSearchType + '_like=' + encodedQuery).then(onMoviesGetComplete, onError);
  }

  //addMovie: POST new movie to server
  const addMovie = function(movieData){
    return $http.post(DATABASE_LOCATION + '/movies', movieData).then(onAddMovieComplete, onError);
  }

  //updateMovie: PUT new movie information for existing movie with specified id

  //deleteMovie: DELETE movie with specified id

  //helpers
  const onMoviesGetComplete = function(response){
    return response.data;
  }

  const onAddMovieComplete = function(response){
    return response.data;
  }

  const onError = function(err){
    $log.error(err);
    return err;
  }

  return {
    getMovies: getMovies,
    getMovieById: getMovieById,
    searchMovies: getMoviesWithSearch,
    addMovie: addMovie
  };
}

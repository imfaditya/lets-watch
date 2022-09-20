class Movies{
  static getMovies(pages){
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=8dc5d6d14e96fc3e3117664ecaadcee7&language=en-US&page=${pages}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        if(responseJSON.results){
          return Promise.resolve(responseJSON.results);
        }else{
          return Promise.reject("Data Not Found");
        }
      })
  }
}

export default Movies;
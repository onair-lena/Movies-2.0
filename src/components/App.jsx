import React from "react";
//import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";
import { API_URL, API_KEY_3} from "../utils/api"
import MovieTabs from "./MovieTabs"
import MoviePages from "./MoviePages"
// UI = fn(state, props)

// App = new React.Component()

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "popularity.desc",
      pages: [],
      page: 2
    };
  }
  
  componentDidMount() {
    this.getMovies()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sort_by !== this.state.sort_by || prevState.page !== this.state.page) {
this.getMovies()
    }
  }
  

  getMovies = () => {
    fetch(`${API_URL}?api_key=${API_KEY_3}&sort_by=${
      this.state.sort_by}&page=${this.state.page}`).then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log("data", data)
      this.setState({
        movies: data.results,
        pages: data.total_pages,
        page: data.page
      })
      // console.log("this.setState", this.state.pages)
    })
  }

  deleteMovie = movie => {
    console.log(movie.id);
    const updateMovies = this.state.movies.filter(item => item.id !== movie.id);

    // this.state.movies = updateMovies;
    this.setState({
      movies: updateMovies
    });
  };

  addMovieToWillWatch = movie => {
    const updateMoviesWillWatch = [...this.state.moviesWillWatch];
    updateMoviesWillWatch.push(movie);

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  deleteMovieFromWillWatch = movie => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(
      item => item.id !== movie.id
    );

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  updateSortBy = (value) => {
    this.setState({
      sort_by: value
    })
  }

  updateNextPage = (value) => {
    console.log("value next", this.state.page)
    if (value !==this.state.pages) {
    this.setState({
      page: value+1
    })
  }}

  updatePrevPage = (value) => {
    console.log("value prev", this.state.page)
    if (value !== 1) {
    this.setState({
      page: value-1
    })
  }}

  render() {
    console.log("render", this);
    return (
      <div className="container pb-4">
        <div className="row mt-4">
          <div className="col-9">
          <div className="row mb-4">
            <div className="col-12">
              <MovieTabs 
                sort_by={this.state.sort_by}
                updateSortBy={this.updateSortBy}
              />
            </div>
          </div>
              <div className="row">
              {this.state.movies.map(movie => {
                return (
                  <div className="col-6 mb-4" key={movie.id}>
                    <MovieItem
                      data={movie}
                      deleteMovie={this.deleteMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      deleteMovieFromWillWatch={this.deleteMovieFromWillWatch}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3">
            <h4>Will Watch: {this.state.moviesWillWatch.length} movies</h4>
            <ul className="list-group">
              {this.state.moviesWillWatch.map(movie => (
                <li key={movie.id} className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <p>{movie.title}</p>
                    <p>{movie.vote_average}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <MoviePages
          pages={this.state.pages}
          page={this.state.page}
          updateNextPage={this.updateNextPage}
          updatePrevPage={this.updatePrevPage}
          />
      </div>
    );
  }
}

export default App;

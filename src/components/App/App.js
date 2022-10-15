import React, {Component} from 'react';
import movieData from './movieData';
import SingleMovie from '../SingleMovie/SingleMovie';
import Movies from '../Movies/Movies';
import Card from '../Card/Card'
import './App.css';
import { eventWrapper, getMouseEventOptions } from '@testing-library/user-event/dist/utils';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      movies: movieData.movies,
      viewMode: "All", 
      singleMovie: [],
      error: null,
    }
  } 
  showSingleMovie = (id)  => {
    const foundMovie = this.state.movies.find(movie => movie.id === id)
    this.setState({viewMode: "SingleMovie"})
    this.setState({singleMovie: foundMovie})
  }
  returnHomePage = () => {
    this.setState({
      ...this.state,
      viewMode: "All"
    })

  }
  
  render() {
    return (
      <main className = 'App'>
        <h1>Rancid Tomatillos</h1>
        {this.state.viewMode === "All" && <Movies movies = {this.state.movies}
        showSingleMovie={this.showSingleMovie} />} 
        {this.state.viewMode === "SingleMovie" && <SingleMovie movie = {this.state.singleMovie} 
        returnHomePage={this.returnHomePage}/>}
        {this.state.error && <h2>{this.state.error}</h2>}
      </main>
    )
  }

}

export default App;

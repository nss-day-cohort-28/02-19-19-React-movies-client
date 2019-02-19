import React, { Component } from "react"
import MovieItem from "../movie-item"

class MovieComponent extends Component {

  componentDidMount() {
    this.props.getAll("movies")
  }

  render() {
    const movieNode = this.props.movies.map( (movie) => {
      return (<MovieItem movie={movie} key={movie.id} />)
    })

    return (
      <div className="movie-container">
        <h2>A list of movies</h2>
        <ul>{movieNode}</ul>
      </div>
    )
  }
}

export default MovieComponent

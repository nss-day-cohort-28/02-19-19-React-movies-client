import React, { Component } from "react"

export default class MovieItem extends Component {
  render() {
    return (<li>{this.props.movie.title}</li>)
  }
}

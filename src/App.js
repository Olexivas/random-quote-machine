import React, { Component } from "react";

export class App extends Component {
  state = {
    data: []
  };

  fetchApi = () => {
      fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(data =>
        this.setState({
          data
        })
      );
  };

  handleClick = () => {
    this.fetchApi();
  }

  componentDidMount = () => {
      this.fetchApi();
  }

  render() {
    const { content, author } = this.state.data;

    return (
      <div className="wrapper">
        <div className="quote-box">
          <p className="quote-text">
            {content}
          </p>
          <p className="quote-author">{author}</p>
        </div>

        <div className="buttons">
          <a href="#" className="btn">
            Twitter
          </a>
          <a href="#" className="btn" onClick={this.handleClick}>
            New Quote
          </a>
        </div>

        <footer className="footer">
          <p>By Olexivas</p>
        </footer>
      </div>
    );
  }
}

export default App;

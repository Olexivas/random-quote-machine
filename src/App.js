import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';

import "./App.scss";

class App extends Component {
  state = { data: [] };

  fetchApi = () => {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(data => this.setState({ data }));
  };

  handleClick = () => {
    this.fetchApi();
  };

  componentDidMount = () => {
    this.fetchApi();
  };


  render() {
    const { content, author } = this.state.data;
    const quote = `https://twitter.com/intent/tweet?text=${content}`;

    return (
      <div className="wrapper">
        <div className="quote-box" id="quote-box">
          <p className="quote-text" id="text">{content}</p>
          <p className="quote-author" id="author">{author}</p>
          <div className="buttons">
            <a id="tweet-quote"href={quote} className="btn" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="#"
              className="btn"
              id="new-quote"
              onClick={this.handleClick}
            >
              New quote
            </a>
          </div>
        </div>

        <footer className="footer">
          <p>By Olexivas</p>
        </footer>
      </div>
    );
  }
}

export default App;

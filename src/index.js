import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
// import '../css/style.scss';
import Header from './components/Header';
import Post from './components/Post';

class App extends Component {
  state = {
    posts: [
      {
        author: 'Matheus Mondenez Paulino',
        content: 'Teste teste',
      },
      {
        author: 'Michel Mondenez Paulino',
        content: 'Esse é feio que dói',
      },
      {
        author: 'Mais um teste',
        content: 'Teste teste',
      },
    ],
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Post data={this.state.posts[1]} />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));

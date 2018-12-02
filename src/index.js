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
    const post = this.state.posts.map((post, index) => <Post key={index} data={post} />);

    return (
      <Fragment>
        <Header />
        {post}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));

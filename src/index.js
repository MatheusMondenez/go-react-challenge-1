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
        time: 'Há 30 minutos',
      },
      {
        author: 'Michel Mondenez Paulino',
        content: 'Esse é feio que dói',
        time: 'Há 1 hora',
      },
      {
        author: 'Mais um teste',
        content: 'Teste teste',
        time: 'Há 2 horas',
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

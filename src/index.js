import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import Post from './components/Post';
import './styles/app.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: 'Matheus Mondenez Paulino',
        avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
        body: 'Teste teste',
        time: 'Há 30 minutos',
      },
      {
        id: 2,
        author: 'Michel Mondenez Paulino',
        avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
        body: 'Esse é feio que dói',
        time: 'Há 1 hora',
      },
      {
        id: 3,
        author: 'Mais um teste',
        avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
        body: 'Teste teste',
        time: 'Há 2 horas',
      },
    ],
  };

  render() {
    const post = this.state.posts.map((post, index) => <Post key={index} data={post} />);

    return (
      <Fragment>
        <Header />
          <div className="post-container">
            {post}
          </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));

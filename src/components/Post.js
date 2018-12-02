import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import '../../css/style.scss';
import PostHeader from './PostHeader';

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <PostHeader name={this.props.data.author} />
        <hr />
        <p>{this.props.data.content}</p>
      </div>
    );
  }
}

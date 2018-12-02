import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import '../../css/style.scss';
import PostHeader from './PostHeader';

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <PostHeader time={this.props.data.time}>{this.props.data.author}</PostHeader>
        <hr />
        <p>{this.props.data.content}</p>
      </div>
    );
  }
}

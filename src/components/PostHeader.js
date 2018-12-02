import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import '../../css/style.scss';
// import profile from '../../img/profile.jpg';

export default class PostHeader extends Component {
  render() {
    return (
      <div className="post-header">
        {/* <img src={profile} /> */}
        <strong>{this.props.name}</strong>
      </div>
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import '../../css/style.scss';

const Header = props => <div className="page-header">{props.children}</div>;

Header.defaultProps = {
  children: 'Rocketbook',
};

Header.propTypes = {
  children: PropTypes.string,
};

export default Header;

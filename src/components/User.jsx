import React from 'react';
import PropTypes from 'prop-types';

import './user.css';
import '../index.css';

class User extends React.Component {
  render() {
    const { user: { image, name, lastName, user }, loading } = this.props;
    const statusLoading = loading ? ' loading' : '';
    return (
      <section className="user-section">
        <div className={ `user-image-div${statusLoading}` }>
          { <img src={ image } className="user-image" alt={ user } /> || {} }
        </div>
        <div className={ `user-name-div${statusLoading}` }>
          { <h3>{name} {lastName}</h3> || {} }
        </div>
        <div className={ `user-div${statusLoading}` }>
          { <span>{user}</span> || {} }
        </div>
      </section>
    );
  }
}

User.propTypes = {
  user: PropTypes.shape(),
  loading: PropTypes.bool,
}.isRequired;

export default User;

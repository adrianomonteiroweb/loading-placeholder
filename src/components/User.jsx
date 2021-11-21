import React from 'react';
import PropTypes from 'prop-types';

import './user.css';
import '../index.css';

class User extends React.Component {
  render() {
    const { loading } = this.props;
    const statusLoading = loading ? ' loading' : '';
    return (
      <section className="user-section">
        <div className={ `user-image-div${statusLoading}` }>
          {}
        </div>
        <div className={ `user-name-div${statusLoading}` }>
          {}
        </div>
        <div className={ `user-div${statusLoading}` }>
          {}
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

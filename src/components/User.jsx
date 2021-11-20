import React from 'react';

import './user.css';
import '../index.css';
import user from '../images/user.jpg';

const User = function userFunction() {
  return (
    <section className="user-section">
      <div className="user-div loading">
        <img
          src={ user }
          className="user"
          alt="User"
        />
      </div>
      <h3>Letícia Borges</h3>
      <span>@letborges23</span>
    </section>
  );
};

export default User;

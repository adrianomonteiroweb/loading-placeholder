import React from 'react';

import Header from './components/Header';
import User from './components/User';

const App = function app() {
  return (
    <>
      <Header />
      <User />
      <div className="card">
        <div className="card__image loading">
          {}
        </div>
        <div className="card__text">
          <h1 className="heading">Title</h1>
          <p className="paragraph">Text text text text text.</p>
        </div>
      </div>
    </>
  );
};

export default App;

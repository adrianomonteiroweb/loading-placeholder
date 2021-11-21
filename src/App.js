import React from 'react';

import Header from './components/Header';
import User from './components/User';
import Cards from './components/Cards';

import { getUser } from './services/userAPI';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      user: [],
    };
  }

  componentDidMount() {
    this.fetch(getUser);
  }

  async fetch(get) {
    const promise = await get();
    this.setState({
      user: Object.values(promise),
      loading: false,
    });
  }

  render() {
    const { user, loading } = this.state;
    return (
      <>
        <Header />
        <User user={ user } loading={ loading } />
        <Cards user={ user } loading={ loading } />
      </>
    );
  }
}

export default App;

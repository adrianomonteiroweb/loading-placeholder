import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './components/Header';
import User from './components/User';
import Cards from './components/Cards';

import { getUser } from './services/userAPI';
import { setLogin } from './redux/actions';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      user: {},
    };
  }

  componentDidMount() {
    this.fetch(getUser);
  }

  async fetch(get) {
    const promise = await get();
    this.setState({
      user: await Object.values(promise)[0],
      loading: false,
    });
    const { user: { email } } = this.state;
    const { dispatchSetEmail } = this.props;
    dispatchSetEmail(email);
  }

  render() {
    const { loading, user } = this.state;
    return (
      <div>
        <Header />
        <User user={ user } loading={ loading } />
        <Cards user={ user } loading={ loading } />
      </div>
    );
  }
}

App.propTypes = {
  dispatchSetEmail: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  dispatchSetEmail: (email) => dispatch(setLogin(email)),
});

const mapStateToProps = (state) => ({ user: state.user.email });

export default connect(mapStateToProps, mapDispatchToProps)(App);

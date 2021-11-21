import React from 'react';
import PropTypes from 'prop-types';

import './creditCard.css';
import '../index.css';

class CreditCard extends React.Component {
  render() {
    const { loading } = this.props;
    const statusLoading = loading ? ' loading' : '';
    return (
      <section className={ `credit-cards-section${statusLoading}` }>
        {}
      </section>
    );
  }
}

CreditCard.propTypes = {
  loading: PropTypes.bool,
}.isRequired;

export default CreditCard;

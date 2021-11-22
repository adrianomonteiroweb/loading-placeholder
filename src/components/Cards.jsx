import React from 'react';
import PropTypes from 'prop-types';

import './cards.css';
import CreditCard from './CreditCard';

class Cards extends React.Component {
  render() {
    const { loading, user } = this.props;
    const statusLoading = loading ? ' loading' : '';
    const isCreditCard = () => !loading ? <CreditCard user={ user } /> : '';
    return (
      <section className={`cards-section${statusLoading}`}>
        {  isCreditCard() }
      </section>
    );
  }
}

Cards.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.shape(),
}.isRequired;

export default Cards;

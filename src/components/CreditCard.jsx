import React from 'react';
import PropTypes from 'prop-types';

import './creditCard.css';
import '../index.css';

class CreditCard extends React.Component {
  render() {
    const {
      user: {
        cards: {
          creditCards: {
            number,
            creditBalance,
            fleg,
          },
        },
      },
    } = this.props;
    return (
      <section className="credit-cards-section">
        <div className="account-div">
          <span>{ number }</span>
        </div>
        <div className="credit-cards-div">
          <div className="credit-balance-div">
            <span>{ `$ ${creditBalance.toFixed(2)}` }</span>
          </div>
          <div className="fleg-div">
            <img src={ fleg } className="fleg" alt="credit card" />
          </div>
        </div>
      </section>
    );
  }
}

CreditCard.propTypes = {
  creditCards: PropTypes.shape(),
}.isRequired;

export default CreditCard;

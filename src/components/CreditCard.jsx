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
        <div className="account">
          <span>{ number }</span>
        </div>
        <div className="credit-cards">
          <div className="credit-balance">
            <span>{ `$ ${creditBalance.toFixed(2)}` }</span>
          </div>
          <div className="fleg">
            <p>{ fleg }</p>
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

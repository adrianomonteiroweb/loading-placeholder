import React from 'react';

import './eachExpense.css';

class EachExpense extends React.Component {
  render() {
    const { expense: { expense, date, hours, value } } = this.props;
    return (
      <section className="each-expense-section">
        <div className="each-expense-date">
          <span className="expense-date">Dia {date} as {hours}hrs.</span>
        </div>
        <div className="each-expense">
          <h4 className="expense">R$ {value.toFixed(0)} Reais - {expense}.</h4>
        </div>
      </section>
    );
  }
}

export default EachExpense;

import React from 'react';

import EachExpense from './EachExpense';

import './expenses.css';

class Expenses extends React.Component {
  render() {
    const { user, loading } = this.props;
    const statusLoading = loading ? ' loading' : '';
    const isExpense = user.expenses || [];
    return (
      <section className={ `expenses-section${statusLoading}` }>
        { isExpense.map((isExp, i) => <EachExpense key={ i } expense={ isExp } />) }
      </section>
    );
  }
}

export default Expenses;

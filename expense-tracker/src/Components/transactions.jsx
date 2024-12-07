import React from "react";

const Transactions = ({ transactions }) => {
  return (
    <div className="transaction-container">
      <h2>Transactions</h2>
      {transactions.map((transaction, index) => (
        <div className="categories" key={index}>
          <p>{transaction.category}</p>
          <p>{transaction.amount}</p>
        </div>
      ))}
    </div>
  );
}

export default Transactions;

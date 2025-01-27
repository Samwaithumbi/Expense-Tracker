import React, { useState, useEffect } from "react";

const Balance = () => {
  const storedIncome = localStorage.getItem("income");
  const storedExpense = localStorage.getItem("expenses");

  // Convert to number and handle NaN
  const income = isNaN(parseFloat(storedIncome)) ? 0 : parseFloat(storedIncome);
  const expense = isNaN(parseFloat(storedExpense)) ? 0 : parseFloat(storedExpense);

  const [balance, setBalance] = useState(income - expense);

  // Update balance whenever income or expense changes
  useEffect(() => {
    setBalance(income - expense);
  }, [income, expense]);

  return (
    <div className="balance-container">
      <div className="b-container">
        <div>
          <h2>Total Balance</h2>
          <h1>{balance.toString()}</h1>
        </div>
        <div className="income-expense">
          <div className="income">
            <h3>Income</h3>
            <h2>{income.toString()}</h2>
          </div>
          <div className="expense">
            <h3>Expenses</h3>
            <h2>{expense.toString()}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;

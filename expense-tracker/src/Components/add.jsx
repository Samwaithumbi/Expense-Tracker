import React, { useState, useEffect } from "react";
import Balance from "./balance";
import Transactions from "./transactions";

const Add = () => {
  const [tempIncomeValue, setTempIncomeValue] = useState("0");
  const [tempExpenseValue, setTempExpenseValue] = useState("0");
  const [storedIncome, setStoredIncome] = useState("0");
  const [storedExpense, setStoredExpense] = useState("0");
  const [transactions, setTransactions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const storedIncome = localStorage.getItem('income');
    if (storedIncome) {
      setStoredIncome(storedIncome);
    }

    const storedExpense = localStorage.getItem('expense');
    if (storedExpense) {
      setStoredExpense(storedExpense);
    }

    const storedTransactions = localStorage.getItem('transactions');
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  const addTransaction = (newTransaction) => {
    const updatedTransactions = [newTransaction, ...transactions].slice(0, 5);
    setTransactions(updatedTransactions);
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
  };

  const handleAddIncome = () => {
    const newIncomeValue = parseFloat(storedIncome) + parseFloat(tempIncomeValue);
    setStoredIncome(newIncomeValue.toString());
    localStorage.setItem('income', newIncomeValue.toString());
    setTempIncomeValue("0");
    addTransaction({ type: 'income', amount: tempIncomeValue, category: 'Income' });
  };

  const handleAddExpense = () => {
    const newExpenseValue = parseFloat(storedExpense) + parseFloat(tempExpenseValue);
    setStoredExpense(newExpenseValue.toString());
    localStorage.setItem('expense', newExpenseValue.toString());
    setTempExpenseValue("0");
    addTransaction({ type: 'expense', amount: tempExpenseValue, category: selectedCategory });
  };

  return (
    <div className="add">

      <Balance storedIncome={storedIncome} storedExpense={storedExpense} />
      <Transactions transactions={transactions} />
      <div className="title">
        <h2 id="transaction">Add Transaction</h2>
      </div>
      <div className="incom">
        <h3>Income</h3>
        <select name="category" id="category" required>
          <option value="Category">Category</option>
          <option value="Salary">Salary</option>
          <option value="Investments">Investments</option>
          <option value="Allowance">Allowance</option>
          <option value="Bonus">Bonus</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="number"
          value={tempIncomeValue}
          onChange={(e) => setTempIncomeValue(e.target.value)}
        />
        <button className="btn-save" onClick={handleAddIncome}>Save</button>
      </div>
      <div className="expens">
        <h3>Expense</h3>
        <select
          name="category"
          id="category"
          required
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="Category">Category</option>
          <option value="Shopping">Shopping</option>
          <option value="Transport">Transport</option>
          <option value="Housing">Housing</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Education">Education</option>
          <option value="Healthcare">Healthcare</option>
        </select>
        <input
          type="number"
          value={tempExpenseValue}
          onChange={(e) => setTempExpenseValue(e.target.value)}
          className="inputIncome"
        />
        <button onClick={handleAddExpense} className="btn-save">Save</button>
      </div>
    </div>
  );
};

export default Add;

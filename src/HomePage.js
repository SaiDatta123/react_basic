import React from 'react';
import EntryList from './EntryList';
import EntryFormPage from './EntryFormPage';

function HomePage({ entries, onAddEntry, onEditEntry, onDeleteEntry }) {
  const totalIncome = entries
    .filter(entry => entry.type === 'Income')
    .reduce((acc, entry) => acc + parseFloat(entry.amount), 0);

  const totalExpense = entries
    .filter(entry => entry.type === 'Expense')
    .reduce((acc, entry) => acc + parseFloat(entry.amount), 0);

  const balance = totalIncome - totalExpense;

  return (
    <div>
      <header>
        <h1>Expense Tracker</h1>
        <div className="totals">
          <div>Total Income: ${totalIncome.toFixed(2)}</div>
          <div>Total Expense: ${totalExpense.toFixed(2)}</div>
          <div>Balance: ${balance.toFixed(2)}</div>
        </div>
        <button onClick={EntryFormPage}>Add Entry</button>
      </header>
      <EntryList entries={entries} onEditEntry={onEditEntry} onDeleteEntry={onDeleteEntry} />
    </div>
  );
}

export default HomePage;

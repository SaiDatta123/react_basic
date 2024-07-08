import './App.css';
import { useState, useEffect } from 'react';
import EntryForm from './EntryForm';
import EntryList from './EntryList';
import { Stack } from 'react-bootstrap';

function App() {

  const [entries, setEntries] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEntry, setCurrentEntry] = useState(null);
  const [editIndex, setEditIndex] = useState(-1);

  const totalIncome = entries
    .filter(entry => entry.type === 'Income')
    .reduce((acc, entry) => acc + parseFloat(entry.amount), 0);

  const totalExpense = entries
    .filter(entry => entry.type === 'Expense')
    .reduce((acc, entry) => acc + parseFloat(entry.amount), 0);

  const balance = totalIncome - totalExpense;


  useEffect(() => {
    fetch('http://localhost:8001/entries')
      .then(response => response.json())
      .then(data => setEntries(data));
  }, []);

  const addEntry = entry => {
    fetch('http://localhost:8001/entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry),
    })
      .then(response => response.json())
      .then(data => setEntries([...entries, data]));
  };

  const updateEntry = (index, updatedEntry) => {
    const entryId = entries[index].id;
    fetch(`http://localhost:8001/entries/${entryId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedEntry),
    })
      .then(response => response.json())
      .then(data => {
        const updatedEntries = entries.map((entry, i) =>
          i === index ? data : entry
        );
        setEntries(updatedEntries);
      });
  };

  const deleteEntry = index => {
    const entryId = entries[index].id;
    fetch(`http://localhost:8001/entries/${entryId}`, {
      method: 'DELETE',
    }).then(() => {
      setEntries(entries.filter((entry, i) => i !== index));
    });
  };

  const editEntry = (entry, index) => {
    setCurrentEntry(entry);
    setEditIndex(index);
    setIsEditing(true);
  };

  const handleFormSubmit = (entry) => {
    if (isEditing) {
      updateEntry(editIndex, entry);
    } else {
      addEntry(entry);
    }
    setIsEditing(false);
    setCurrentEntry(null);
  };

  return (
    <div className="container">
      <h2 className="text-uppercase my-2">Expense Tracker</h2>
      <div className="row">
        <div className="col-8 col-md-6">
          <Stack gap={1}>
            <div className="p-2"><b>Total Income </b>: <b style={{ color: "green" }}>{totalIncome.toFixed(2)}</b></div>
            <div className="p-2"><b>Total Expense </b>: <b style={{ color: "red" }}>{totalExpense.toFixed(2)}</b></div>
            <div className="p-2"><b>Balance </b> : <b style={{ color: "blue" }}>{balance.toFixed(2)}</b></div>
          </Stack>
          <br />
          <EntryList entries={entries} onEditEntry={editEntry} onDeleteEntry={deleteEntry} />
        </div>
        <div className="col-8 col-md-6">
          <EntryForm onSubmit={handleFormSubmit}
            isEditing={isEditing}
            entry={currentEntry} />
        </div>

      </div>
    </div>

  );
}


export default App;

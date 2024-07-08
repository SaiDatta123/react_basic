import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function EntryForm({ onSubmit, isEditing, entry }) {
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    if (isEditing && entry) {
      setDescription(entry.description);
      setType(entry.type);
      setAmount(entry.amount);
    } else {
      setDescription('');
      setType('');
      setAmount('');
    }
  }, [isEditing, entry]);

  const handleSubmit = e => {
    e.preventDefault();
    const entryData = { description, type, amount: parseFloat(amount) };
    onSubmit(entryData);
    setDescription('');
    setType('');
    setAmount('');
  };

  const handleReset = () => {
    setDescription('');
    setType('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="entry-form">
      <div className={isEditing ? 'EditHeading' : 'AddHeading'}><b>{isEditing ? 'Edit Item' : 'Add Item'}</b></div><br />
      <div className="form-group">
        Description :&nbsp;&nbsp;
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
      </div>
      <br />
      <div className="form-group form-check" id="check-box">
        Type : &nbsp;&nbsp;
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="">--select--</option>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
          required
        </select>
      </div>
      <br />
      <div className="form-group">
        Amount : &nbsp;&nbsp;
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className={
        isEditing ? "btn btn-info mt-3" : "btn btn-primary mt-3"
      }>{isEditing ? 'Update' : 'Add'}</Button> &nbsp;&nbsp;
    </form>
  );
}

export default EntryForm;

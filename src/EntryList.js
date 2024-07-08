import React from 'react';
import { Table, Button } from 'react-bootstrap';

function EntryList({ entries, onEditEntry, onDeleteEntry }) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>

                    <th>Description</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th colSpan="2" className="actions">Actions</th>
                </tr>
            </thead>
            <tbody>
                {entries.map((entry, index) => (
                    <tr key={entry.id}>
                        <td>{entry.description}</td>
                        <td>{entry.type}</td>
                        <td>{entry.amount.toFixed(2)}</td>
                        <td><Button variant="info" onClick={() => onEditEntry(entry, index)}>Edit</Button></td>
                        <td><Button variant="danger" onClick={() => onDeleteEntry(index)}>Delete</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default EntryList;

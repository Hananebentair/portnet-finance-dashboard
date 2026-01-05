import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

export default function TransactionToolbar() {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h5 className="mb-0 fw-bold">Actions</h5> {/* fw-bold makes it clearly bold */}
      <ButtonGroup>
        <Button variant="success">Send</Button>
        <Button variant="primary">Reject</Button>
        <Button variant="outline-success">Export to Excel</Button>
        <Button variant="outline-secondary" onClick={() => window.print()}>Print</Button>
      </ButtonGroup>
    </div>
  );
}

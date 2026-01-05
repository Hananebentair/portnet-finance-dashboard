// src/components/SummaryFooter.js
import React from 'react';
import { Card } from 'react-bootstrap';
import { BoxSeam, CheckCircle, HourglassSplit, XCircle, CashStack } from 'react-bootstrap-icons';

export default function SummaryFooter() {
  // Static mock summary data
  const summary = {
    totalLCs: 100,
    approved: 80,
    pending: 10,
    rejected: 10,
    totalAmount: 267698
  };

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Body className="d-flex justify-content-between flex-wrap gap-3">
        <div className="d-flex align-items-center">
          <BoxSeam className="me-1" color="#000" />
          <strong>Total LCs: {summary.totalLCs}</strong>
        </div>
        <div className="d-flex align-items-center">
          <CheckCircle className="me-1" color="#000" />
          <strong>Approved: {summary.approved}</strong>
        </div>
        <div className="d-flex align-items-center">
          <HourglassSplit className="me-1" color="#000" />
          <strong>Pending: {summary.pending}</strong>
        </div>
        <div className="d-flex align-items-center">
          <XCircle className="me-1" color="#000" />
          <strong>Rejected: {summary.rejected}</strong>
        </div>
        <div className="d-flex align-items-center">
          <CashStack className="me-1" color="#000" />
          <strong>
            Total Amount: {summary.totalAmount.toLocaleString()} MAD
          </strong>
        </div>
      </Card.Body>
    </Card>
  );
}

// src/components/Reports.js
import React from 'react';
import { Card, Button, Table } from 'react-bootstrap';
import './Reports.css'; // Make sure you have this file for additional styling

const Reports = () => {
  const reportData = [
    { month: 'July 2025', transactions: 45, totalAmount: '4,200,000 MAD' },
    { month: 'June 2025', transactions: 38, totalAmount: '3,750,000 MAD' },
    { month: 'May 2025', transactions: 41, totalAmount: '3,980,000 MAD' },
    { month: 'April 2025', transactions: 50, totalAmount: '4,500,000 MAD' },
    { month: 'March 2025', transactions: 36, totalAmount: '3,600,000 MAD' },
    { month: 'February 2025', transactions: 42, totalAmount: '4,100,000 MAD' },
    { month: 'January 2025', transactions: 39, totalAmount: '3,900,000 MAD' },
  ];

  const downloadReport = () => {
    alert('📄 Report downloaded successfully!');
  };

  return (
    <Card className="shadow-sm border-0">
      <Card.Body>
        <h2>📑 Monthly Reports</h2>
        <Table hover responsive bordered className="reports-table">
          <thead className="table-dark">
            <tr>
              <th>Month</th>
              <th>Transactions</th>
              <th>Total Amount (MAD)</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((r, idx) => (
              <tr key={idx}>
                <td>{r.month}</td>
                <td>{r.transactions}</td>
                <td>{r.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="success" onClick={downloadReport}>
          Download Latest Report
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Reports;

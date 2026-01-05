import React from "react";
import { Table, Badge } from "react-bootstrap";

export default function TransactionTable() {
  const transactions = [
    {
      ref: "LC2025-001",
      importer: "Maroc Trading SARL",
      bank: "Attijariwafa Bank",
      stage: "Document Review",
      status: "Approved",
      amount: "250,000 MAD",
      beneficiary: "China Export Ltd.",
      issueDate: "2025-01-15",
      lastUpdate: "2025-02-05",
    },
    {
      ref: "LC2025-002",
      importer: "Atlas Import",
      bank: "Banque Populaire",
      stage: "Customs Clearance",
      status: "Pending",
      amount: "780,000 MAD",
      beneficiary: "Turkish Textiles Co.",
      issueDate: "2025-02-02",
      lastUpdate: "2025-02-10",
    },
    {
      ref: "LC2025-003",
      importer: "Maghreb Fruits",
      bank: "BMCE Bank of Africa",
      stage: "Shipment in Transit",
      status: "Approved",
      amount: "1,200,000 MAD",
      beneficiary: "AgroExport Spain",
      issueDate: "2025-03-01",
      lastUpdate: "2025-03-08",
    },
    {
      ref: "LC2025-004",
      importer: "CasaTech Electronics",
      bank: "CIH Bank",
      stage: "Payment Processing",
      status: "Rejected",
      amount: "450,000 MAD",
      beneficiary: "KoreaTech Ltd.",
      issueDate: "2025-03-05",
      lastUpdate: "2025-03-10",
    },
    {
      ref: "LC2025-005",
      importer: "Ouarzazate Solar Equip",
      bank: "Crédit Agricole du Maroc",
      stage: "Document Verification",
      status: "Pending",
      amount: "3,500,000 MAD",
      beneficiary: "German Solar GmbH",
      issueDate: "2025-04-01",
      lastUpdate: "2025-04-03",
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "Approved":
        return <Badge bg="success">{status}</Badge>;
      case "Pending":
        return <Badge bg="warning" text="dark">{status}</Badge>;
      case "Rejected":
        return <Badge bg="danger">{status}</Badge>;
      default:
        return <Badge bg="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="rounded shadow-sm p-3 bg-light">
      <h6 className="mb-4">📋 Transactions</h6>
      <Table striped bordered hover className="table-hover">
        <thead>
          <tr>
            <th>Ref</th>
            <th>Importer</th>
            <th>Bank</th>
            <th>Stage</th>
            <th>Status</th>
            <th>Amount (MAD)</th>
            <th>Beneficiary</th>
            <th>Date of Issue</th>
            <th>Last Update</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, idx) => (
            <tr key={idx}>
              <td>{tx.ref}</td>
              <td>{tx.importer}</td>
              <td>{tx.bank}</td>
              <td>{tx.stage}</td>
              <td>{getStatusBadge(tx.status)}</td>
              <td>{tx.amount}</td>
              <td>{tx.beneficiary}</td>
              <td>{tx.issueDate}</td>
              <td>{tx.lastUpdate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

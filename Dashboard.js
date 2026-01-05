// src/components/Dashboard.js
import React from 'react';
import { Card, Row, Col, Table } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  const kpis = [
    { title: 'Total Transactions', value: '245', change: '+12%' },
    { title: 'Total Amount (MAD)', value: '4,580,000', change: '+8%' },
    { title: 'Pending LCs', value: '18', change: '-5%' },
  ];

  const latestTransactions = [
    { ref: 'LC-2025-001', importer: 'Casablanca Trading', amount: '350,000', status: 'Completed' },
    { ref: 'LC-2025-002', importer: 'Atlas Imports', amount: '250,000', status: 'Pending' },
    { ref: 'LC-2025-003', importer: 'Rabat Textiles', amount: '410,000', status: 'Completed' },
  ];

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Transactions (MAD)',
        data: [500000, 700000, 800000, 650000, 900000, 1100000, 1000000],
        borderColor: '#007bff',
        tension: 0.3,
      },
    ],
  };

  return (
    <div>
      <h2 className="mb-4">📊 Dashboard Overview</h2>
      <Row>
        {kpis.map((kpi, idx) => (
          <Col md={4} key={idx}>
            <Card className="mb-3 shadow-sm border-0">
              <Card.Body>
                <h5 className="text-muted">{kpi.title}</h5>
                <h3>{kpi.value}</h3>
                <small className={kpi.change.startsWith('+') ? 'text-success' : 'text-danger'}>
                  {kpi.change} from last month
                </small>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="mb-4 shadow-sm border-0">
        <Card.Body>
          <h5>Monthly Transactions</h5>
          <Line data={chartData} />
        </Card.Body>
      </Card>

      <Card className="shadow-sm border-0">
        <Card.Body>
          <h5>Latest Transactions</h5>
          <Table hover responsive>
            <thead>
              <tr>
                <th>Ref</th>
                <th>Importer</th>
                <th>Amount (MAD)</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {latestTransactions.map((tx, idx) => (
                <tr key={idx}>
                  <td>{tx.ref}</td>
                  <td>{tx.importer}</td>
                  <td>{tx.amount}</td>
                  <td>{tx.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Dashboard;

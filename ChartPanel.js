import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Card } from 'react-bootstrap';
import { BarChart as BarChartIcon } from 'react-bootstrap-icons'; // professional chart icon

const data = [
  { name: 'Jul 26', value: 120 },
  { name: 'Jul 27', value: 160 },
  { name: 'Jul 28', value: 90 },
  { name: 'Jul 29', value: 200 },
];

export default function ChartPanel() {
  return (
    <Card style={{ flex: 3 }} className="me-3 shadow-sm">
      <Card.Body>
        {/* Title with professional icon */}
        <Card.Title className="d-flex align-items-center">
          <BarChartIcon className="me-2" /> Transaction History
        </Card.Title>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#063464ff" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card>
  );
}

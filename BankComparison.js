import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Card } from 'react-bootstrap';

const data = [
  { bank: 'BMCE', lcs: 14 },
  { bank: 'CIH', lcs: 10 },
  { bank: 'AWB', lcs: 17 },
];

export default function BankComparison() {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <h6 className="mb-3">🏦 LCs by Bank</h6>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bank" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="lcs" fill="#0b2949ff" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card>
  );
}

import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { CheckCircle, Clock, FileEarmarkBarGraph, CloudArrowUp } from 'react-bootstrap-icons';

export default function DashboardCards() {
  // Static data to replace backend
  const data = {
    liveLCs: 42,
    liveSub: 'Active LCs this month',
    pending: 10,
    pendingSub: 'Waiting for approval',
    completed: 88,
    completedSub: 'Completed LCs',
    exported: 15,
    exportedSub: 'Exported LCs',
  };

  const cards = [
    {
      icon: <CheckCircle size={28} className="text-success" />,
      label: 'Live LCs',
      value: data.liveLCs,
      sub: data.liveSub,
    },
    {
      icon: <Clock size={28} className="text-warning" />,
      label: 'Pending',
      value: data.pending,
      sub: data.pendingSub,
    },
    {
      icon: <FileEarmarkBarGraph size={28} className="text-primary" />,
      label: 'Completed',
      value: data.completed,
      sub: data.completedSub,
    },
    {
      icon: <CloudArrowUp size={28} className="text-info" />,
      label: 'Exported',
      value: data.exported,
      sub: data.exportedSub,
    },
  ];

  return (
    <Row className="mb-4">
      {cards.map((card, index) => (
        <Col md={3} key={index}>
          <Card className="shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="text-muted">{card.label}</h6>
                  <h4 className="fw-bold">{card.value}</h4>
                  <small className="text-secondary">{card.sub}</small>
                </div>
                <div>{card.icon}</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

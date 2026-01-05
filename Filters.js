import React from 'react';
import { Row, Col, Form, Button, Card, InputGroup } from 'react-bootstrap';
import { Search, CalendarEvent, Funnel } from 'react-bootstrap-icons';

export default function Filters() {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Row className="align-items-end">
          {/* 🔍 Search Reference */}
          <Col md={4} className="mb-3">
            <Form.Label>Search Reference</Form.Label>
            <InputGroup>
              <InputGroup.Text><Search /></InputGroup.Text>
              <Form.Control type="text" placeholder="Enter transaction ref..." />
            </InputGroup>
          </Col>

          {/* 📅 Date Range */}
          <Col md={3} className="mb-3">
            <Form.Label><CalendarEvent className="me-2" />Date Range</Form.Label>
            <Form.Select>
              <option>Select...</option>
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
            </Form.Select>
          </Col>

          {/* 🧮 Status */}
          <Col md={3} className="mb-3">
            <Form.Label><Funnel className="me-2" />Status</Form.Label>
            <Form.Select>
              <option>Select...</option>
              <option>Live</option>
              <option>Pending</option>
              <option>Completed</option>
              <option>Amendment</option>
            </Form.Select>
          </Col>

          {/* 🔘 Buttons */}
          <Col md={2} className="d-grid mb-3">
            <Button variant="primary">Apply Filters</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

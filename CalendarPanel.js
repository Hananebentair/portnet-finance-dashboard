import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Card } from 'react-bootstrap';
import { Calendar as CalendarIcon } from 'react-bootstrap-icons'; // Bootstrap Icons

export default function CalendarPanel() {
  return (
    <Card style={{ flex: 1.5 }} className="shadow-sm">
      <Card.Body>
        <Card.Title className="d-flex align-items-center">
          <CalendarIcon className="me-2" /> Events
        </Card.Title>
        <Calendar />
      </Card.Body>
    </Card>
  );
}

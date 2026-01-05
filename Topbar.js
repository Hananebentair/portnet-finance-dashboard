import React from 'react';
import { Navbar, Container, Form, Image, Nav, Dropdown } from 'react-bootstrap';
import { BellFill } from 'react-bootstrap-icons';



export default function Topbar() {
  return (
    <Navbar bg="white" expand="lg" className="mb-3 shadow-sm">
      <Container fluid className="d-flex justify-content-between align-items-center px-3">
        <Navbar.Brand className="fw-semibold fs-5">Letter of Credit – Import</Navbar.Brand>
        <Nav className="align-items-center gap-3">
          <Form.Select size="sm" style={{ width: '120px' }}>
            <option>English</option>
            <option>Français</option>
          </Form.Select>

          <Dropdown align="end">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              <BellFill size={20} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>✅ LC #2025-001 Approved</Dropdown.Item>
              <Dropdown.Item>📄 Doc missing in LC #2025-004</Dropdown.Item>
              <Dropdown.Item>⚠️ Delayed: LC #2025-007</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          
        </Nav>
      </Container>
    </Navbar>
  );
}
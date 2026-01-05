import React, { useState } from 'react';
import { Card, Row, Col, Badge, Form, Button, Collapse } from 'react-bootstrap';

// Bank data with logos
const banks = [
  { name: "Attijariwafa Bank", logo: "/logos/attijari.png", lcs: 17, status: "Active", color: "success" },
  { name: "Banque Populaire", logo: "/logos/bp.png", lcs: 12, status: "Active", color: "success" },
  { name: "BMCE Bank of Africa", logo: "/logos/bmce.png", lcs: 14, status: "Active", color: "success" },
  { name: "CIH Bank", logo: "/logos/cih.png", lcs: 10, status: "Active", color: "success" },
  { name: "Crédit Agricole du Maroc", logo: "/logos/creditagricole.png", lcs: 8, status: "Active", color: "success" },
  { name: "Bank of Africa", logo: "/logos/boa.png", lcs: 11, status: "Active", color: "success" },
];

export default function BanksSection() {
  const [open, setOpen] = useState(false);

  return (
    <Card className="shadow-sm mb-4">
      <Card.Body>
        {/* Collapsible Header */}
        <Button
          variant="primary"
          onClick={() => setOpen(!open)}
          aria-controls="partner-banks-collapse"
          aria-expanded={open}
          className="mb-3 w-100 text-start"
        >
          Partner Banks {open ? "▲" : "▼"}
        </Button>

        {/* Collapse Section */}
        <Collapse in={open}>
          <div id="partner-banks-collapse">
            <Row className="g-4 mb-4">
              {banks.map((bank, index) => (
                <Col md={6} lg={3} key={index}>
                  <Card className="h-100 border-0 shadow-sm hover-scale">
                    <Card.Body className="d-flex flex-column align-items-center text-center">
                      {/* Bank Logo */}
                      <img 
                        src={bank.logo} 
                        alt={bank.name} 
                        style={{ width: '80px', height: '80px', objectFit: 'contain', marginBottom: '10px' }} 
                      />
                      <h6 className="fw-bold mb-1">{bank.name}</h6>
                      <p className="mb-2 text-muted">LCs Processed: {bank.lcs}</p>
                      <Badge bg={bank.color}>{bank.status}</Badge>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Collapse>

        {/* Upload LC Document Section */}
        <h5 className="fw-semibold mb-3 text-primary">📁 Upload & Preview LC Document</h5>
        <Form>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Control type="file" />
          </Form.Group>
          <Button variant="primary">Upload Document</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

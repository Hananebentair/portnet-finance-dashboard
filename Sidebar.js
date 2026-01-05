import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { House, FileText, BarChart, Gear, ShieldLock, CreditCard, Inbox, Send, CheckCircle } from 'react-bootstrap-icons';

export default function Sidebar() {
  return (
    <div className="bg-dark text-white p-4" style={{ width: '280px', height: '100vh' }}>
      {/* PortNet Logo */}
      <div className="mb-4 text-center">
        <img 
          src="/logos/portnet-logo.png"
          alt="PortNet Logo"
          style={{ width: '200px', height: 'auto' }}
        />
      </div>

      <Nav className="flex-column">
        <Nav.Link as={Link} to="/dashboard" className="text-white mb-2">
          <House className="me-2" /> Dashboard
        </Nav.Link>

        <Nav.Link as={Link} to="/letter-of-credit" className="text-white mb-2">
          <FileText className="me-2" /> Letter of Credit
        </Nav.Link>

        <Nav.Link as={Link} to="/documentary-collection" className="text-white mb-2">
          <FileText className="me-2" /> Documentary Collection
        </Nav.Link>

        

        <Nav.Link as={Link} to="/payments" className="text-white mb-2">
          <CreditCard className="me-2" /> Payments
        </Nav.Link>

        

        <Nav.Link as={Link} to="/sent" className="text-white mb-2">
          <Send className="me-2" /> Sent
        </Nav.Link>

        <Nav.Link as={Link} to="/approvals" className="text-white mb-2">
          <CheckCircle className="me-2" /> Approvals
        </Nav.Link>

        <Nav.Link as={Link} to="/reports" className="text-white mb-2">
          <BarChart className="me-2" /> Reports
        </Nav.Link>

        <Nav.Link as={Link} to="/settings" className="text-white">
          <Gear className="me-2" /> Settings
        </Nav.Link>
      </Nav>
    </div>
  );
}

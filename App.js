import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import WelcomeBanner from './components/WelcomeBanner';
import DashboardCards from './components/DashboardCards';
//import LCTimelineProgress from './components/LCTimelineProgress';
import ChartPanel from './components/ChartPanel';
import CalendarPanel from './components/CalendarPanel';
import TransactionToolbar from './components/TransactionToolbar';
import TransactionTable from './components/TransactionTable';
import SummaryFooter from './components/SummaryFooter';
import BanksSection from './components/BanksSection';
import SectionTitle from './components/SectionTitle';
import Reports from './components/Reports';
import { BarChart, Bank, ClipboardData } from 'react-bootstrap-icons';
import { Card, Table, Form, Button } from 'react-bootstrap';

import './App.css';

// ---------------- Placeholder Pages ----------------
const LetterOfCredit = () => (
  <Card className="p-3 shadow-sm">
    <h2><strong>Letter of Credit</strong></h2>
    <Table bordered hover>
      <thead className="table-dark">
        <tr><th>Ref</th><th>Amount (MAD)</th><th>Status</th></tr>
      </thead>
      <tbody>
        <tr><td>LC-2025-001</td><td>4,500,000</td><td>Pending</td></tr>
        <tr><td>LC-2025-002</td><td>3,200,000</td><td>Approved</td></tr>
        <tr><td>LC-2025-003</td><td>2,750,000</td><td>Rejected</td></tr>
      </tbody>
    </Table>
  </Card>
);

const DocumentaryCollection = () => (
  <Card className="p-3 shadow-sm">
    <h2><strong>Documentary Collection</strong></h2>
    <Table bordered hover>
      <thead className="table-dark">
        <tr><th>Ref</th><th>Amount (MAD)</th><th>Status</th></tr>
      </thead>
      <tbody>
        <tr><td>DC-001</td><td>150,000</td><td>In Progress</td></tr>
        <tr><td>DC-002</td><td>90,000</td><td>Completed</td></tr>
        <tr><td>DC-003</td><td>200,000</td><td>Pending</td></tr>
      </tbody>
    </Table>
  </Card>
);

const Guarantees = () => (
  <Card className="p-3 shadow-sm">
    <h2><strong>Guarantees</strong></h2>
    <p>Total active guarantees: 12</p>
    <p>Total value: MAD 5,800,000</p>
  </Card>
);

const Payments = () => (
  <Card className="p-3 shadow-sm">
    <h2><strong>Payments</strong></h2>
    <Table bordered hover>
      <thead className="table-dark">
        <tr><th>Payment Ref</th><th>Amount (MAD)</th><th>Status</th></tr>
      </thead>
      <tbody>
        <tr><td>#001</td><td>250,000</td><td>Completed</td></tr>
        <tr><td>#002</td><td>1,200,000</td><td>Processing</td></tr>
      </tbody>
    </Table>
  </Card>
);

const Drafts = () => (
  <Card className="p-3 shadow-sm">
    <h2><strong>Drafts</strong></h2>
    <ul>
      <li>Draft LC for Atlas Trading</li>
      <li>Draft Guarantee for Casablanca Co.</li>
      <li>Draft Payment for BMCE Bank</li>
    </ul>
  </Card>
);

const Sent = () => (
  <Card className="p-3 shadow-sm">
    <h2><strong>Sent Items</strong></h2>
    <p>Last sent transaction: LC-2025-002 — Approved</p>
  </Card>
);

const Approvals = () => (
  <Card className="p-3 shadow-sm">
    <h2><strong>Approvals</strong></h2>
    <p>You have 2 approvals awaiting your action.</p>
  </Card>
);

// ---------------- Settings Page ----------------
const Settings = () => {
  const [language, setLanguage] = useState('English');
  const [theme, setTheme] = useState('Light');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);

  const handleSave = () => {
    alert(`Settings saved:
Language: ${language}
Theme: ${theme}
Email Notifications: ${emailNotifications ? 'Enabled' : 'Disabled'}
SMS Alerts: ${smsAlerts ? 'Enabled' : 'Disabled'}`);
  };

  return (
    <Card className="p-3 shadow-sm">
      <Card.Body>
        <h2><strong>Settings</strong></h2>

        <Form className="mt-3">
          <Form.Group className="mb-3">
            <Form.Label><strong>Language</strong></Form.Label>
            <Form.Select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option>English</option>
              <option>French</option>
              <option>Arabic</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label><strong>Theme</strong></Form.Label>
            <Form.Select value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option>Light</option>
              <option>Dark</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="switch"
              id="email-notifications"
              label="Email Notifications"
              checked={emailNotifications}
              onChange={(e) => setEmailNotifications(e.target.checked)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="switch"
              id="sms-alerts"
              label="SMS Alerts"
              checked={smsAlerts}
              onChange={(e) => setSmsAlerts(e.target.checked)}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleSave}>Save Settings</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

// ---------------- Dashboard Page ----------------
function DashboardPage() {
  return (
    <>
      <WelcomeBanner />
      <div className="content-area" style={{ marginTop: '20px' }}>
        <SectionTitle icon={<BarChart className="me-2" />} text={<strong>Analytics</strong>} />
        <DashboardCards />

        <div className="row-flex" style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <ChartPanel />
          <CalendarPanel />
        </div>

        <TransactionToolbar />
        <TransactionTable />

        <SectionTitle icon={<Bank className="me-2" />} text={<strong>Partner Banks</strong>} />
        <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
          <BanksSection />
        </div>

        <SectionTitle icon={<ClipboardData className="me-2" />} text={<strong>Overview</strong>} />
        <SummaryFooter />
      </div>
    </>
  );
}

// ---------------- App Component ----------------
function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: 'flex' }}>
        <Sidebar />
        <div className="main-content" style={{ flexGrow: 1, padding: '20px' }}>
          <Topbar />
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/letter-of-credit" element={<LetterOfCredit />} />
            <Route path="/documentary-collection" element={<DocumentaryCollection />} />
            <Route path="/guarantees" element={<Guarantees />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/drafts" element={<Drafts />} />
            <Route path="/sent" element={<Sent />} />
            <Route path="/approvals" element={<Approvals />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

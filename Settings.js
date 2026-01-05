import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

export default function Settings() {
  const [language, setLanguage] = useState('English');
  const [theme, setTheme] = useState('Light');

  const handleSave = () => {
    alert(`Settings saved:\nLanguage: ${language}\nTheme: ${theme}`);
  };

  return (
    <Card className="shadow-sm">
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

          <Button variant="primary" onClick={handleSave}>Save Settings</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

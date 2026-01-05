import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';

export default function DocumentViewer() {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <Card className="shadow-sm mb-4">
      <Card.Body>
        <h6 className="mb-3">📁 Upload & Preview LC Document</h6>
        <Form.Group controlId="formFile">
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>
        {fileName && (
          <div className="mt-3">
            <strong>Selected File:</strong> {fileName}
            <div className="mt-2 p-2 bg-light border rounded">
              [Preview not available in mock mode]
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

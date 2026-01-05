import React from 'react';
import { Alert } from 'react-bootstrap';

export default function WelcomeBanner() {
  return (
    <Alert variant="info" className="shadow-sm">
      Welcome back, Here’s a summary of your latest Letters of Credit.
    </Alert>
  );
}

import React from 'react';

export default function SectionTitle({ icon, text }) {
  return (
    <h5 className="my-4 fw-semibold text-primary d-flex align-items-center gap-2">
      {icon} {text}
    </h5>
  );
}

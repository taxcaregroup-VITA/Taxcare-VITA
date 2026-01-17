import React from 'react';

export function Button({ children, className, ...props }) {
  return (
    <button className={`rounded-lg px-6 py-3 font-semibold transition ${className}`} {...props}>
      {children}
    </button>
  );
}

import React from 'react';

export function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <h1 style={{ fontSize: '3rem', color: '#444' }}>404</h1>
      <p style={{ fontSize: '2rem', color: '#666' }}>Page Not Found</p>
      <a
        href='/'
        style={{ color: '#007BFF', textDecoration: 'none', marginTop: '1rem' }}
      >
        Go back to Home
      </a>
    </div>
  );
}

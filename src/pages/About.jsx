import React from 'react';

export function About() {
  return (
    <div
      style={{
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
        height: '84vh',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '3rem',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: '#333', marginBottom: '1rem' }}>About Our Store</h1>
        <p style={{ color: '#666', marginBottom: '2rem', lineHeight: '1.6' }}>
          We are a leading e-commerce platform committed to providing the best
          shopping experience. Our goal is to ensure customer satisfaction by
          delivering high-quality products right to your doorstep.
        </p>
        <h2 style={{ color: '#333', marginBottom: '1rem' }}>Our Team</h2>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          <li
            style={{
              color: '#666',
              marginBottom: '.5rem',
              transition: 'color 0.3s',
            }}
          >
            Ahmed Mahfouz - CEO
          </li>
          <li
            style={{
              color: '#666',
              marginBottom: '.5rem',
              transition: 'color 0.3s',
            }}
          >
            Mohamed Hamdi - CTO
          </li>
          <li
            style={{
              color: '#666',
              marginBottom: '.5rem',
              transition: 'color 0.3s',
            }}
          >
            Abdallah ShaFiQ - CFO
          </li>
        </ul>
      </div>
    </div>
  );
}

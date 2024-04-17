import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from '/public/mint.svg'; // Replace with your logo file path

const issueTicket = async (email: string) => {
  const response = await fetch('/api/issue', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });
  const data = await response.json();
  return data;
};

export default function BuyTicket() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(`Submitting Email: ${email}`);
    const response = await issueTicket(email);
    console.log(response);
    router.push('/purchaseCompleted');
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
     
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '2rem' }}>
      <div>
        <Image src={logo} alt="Logo" width={200} height={200} />
      </div>
      <h1 style={{ width: '100%', textAlign: 'center', fontSize: '2.5rem', color: '#333', marginBottom: '2rem' }}>Book Your Tickets</h1>

        <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333333' }}>Email:</label>
              <input
                type="email"
                placeholder='mail@crossmint.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: 'calc(100% - 2.1rem)', padding: '0.5rem', border: '1px solid #cccccc', borderRadius: '0.25rem' }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: 'calc(100% - 1rem)',
                padding: '0.75rem',
                backgroundColor: '#4CAF50',
                color: '#ffffff',
                border: 'none',
                borderRadius: '0.25rem',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#45a049')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4CAF50')}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from '/public/mint.svg'; // Replace with your logo file path
import ticketImage from '/public/ticketImage.png' 

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
    <div style={{minHeight: '100vh', backgroundColor: '#f5f5f5',}}>
     
      <div style={{ display: 'flex', alignItems: 'center', margin: '0 auto', flexDirection: 'column', padding: '6rem'}}>
        <div style={{justifyContent: 'center', minHeight: '40vh', backgroundColor: '##F8F9FB', paddingLeft: '0.5rem', paddingTop: '0rem', paddingBottom: '1.5rem', borderRadius: '0.7rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>
        <div style={{marginTop: '0.2rem'}}>
        <Image src={logo} alt="Logo" width={200} height={60} />
        <div style={{marginTop: '5rem', marginBottom: '2rem', marginLeft:'2.2rem', borderRadius:'.3rem'}}> <Image src={ticketImage} alt="ticketImage" width={320} height={320} style={{ borderRadius: '20px', border: '3px solid #AAC5CA'}} /> </div>
      </div>
          <form onSubmit={handleSubmit}>
            <div style={{
                display: 'flex',
                flexDirection:'row',
                alignItems:'center',
                justifyContent: 'center',
                margin: '0 auto',
                cursor: 'pointer',}}><div style={{ margin: '1rem',}}>
              <label style={{alignItems: 'center', display: 'block', color: '#333333', padding: '.5rem' }}></label>
              <input
                type="email"
                placeholder='type your email here'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: 'calc(100% - 1.5rem)', padding: '1rem', border: '1px solid #cccccc', borderRadius: '0.25rem' }}
              /></div>
            </div>
            <button
              type="submit" 
              style={{
                width: 'calc(60% - 1rem)',
                display: 'flex',
                flexDirection:'row',
                alignItems:'center',
                justifyContent: 'center',
                padding: '0.75rem',
                backgroundColor: '#04AA6D',
                color: '#ffffff',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '0.25rem',
                margin: '0 auto',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#45a049')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4CAF50')}
            >
              Buy Your Ticket
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

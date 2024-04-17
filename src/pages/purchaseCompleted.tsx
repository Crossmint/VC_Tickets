import React, { useState } from 'react';
import logo from '/public/mint.svg'; 
import Image from 'next/image';

export default function PurchaseCompleted() {

  


  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
     
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '2rem' }}>
      <div>
        <Image src={logo} alt="Logo" width={200} height={200} />
      </div>
      
        <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>
          <p style={{ width: '100%', textAlign: 'center', fontSize: '1.5rem', color: '#333', marginBottom: '2rem' }}>An email will be sent shortly!</p>
        </div>
      </div>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import logo from '/public/mint.svg';
import Image from 'next/image';

export default function PurchaseCompleted() {
  const [currentImage, setCurrentImage] = useState('/loading.gif'); // Start with loading GIF

  useEffect(() => {
    // Set a timer to switch the image after 6 seconds
    const timer = setTimeout(() => {
      setCurrentImage('/checkyes.png'); // Change to the final image
    }, 60000); // 6000 milliseconds = 6 seconds

    // Clean up the timer when the component unmounts or the image changes
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: '3rem' }}>
        <div style={{ backgroundColor: '#F8F9FB', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', maxHeight: '600px', maxWidth: '400px', width: '100%' }}>
          <Image src={logo} alt="Logo" width={175} height={60} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
            <Image src={currentImage} alt="Display Image" width={125} height={125} />
            <p style={{ fontFamily: 'sans-serif', textAlign: 'center', fontSize: '1.1rem', color: '#285E63', marginTop: '2.5rem' }}>An email will be sent shortly!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
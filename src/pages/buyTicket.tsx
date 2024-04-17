@tailwind base;
@tailwind components;
@tailwind utilities;
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const issueTicket = async (email:string) => {
  const response = await fetch("/api/issue", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  });
  const data = await response.json();

  return data;
};

export default function BuyTicket() {
  const router = useRouter();
  const [email, setEmail] = useState('default@example.com');
  
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    // Here you can handle the form submission, e.g., send the email to an API
    console.log(`Submitting Email: ${email}`);
    const response = await issueTicket(email );
    console.log(response);
    router.push('/purchaseCompleted');
  };

  return (
    <div>
      <h1>Client Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
} 

<div class="flex justify-center items-center min-h-screen bg-background-grey">
  <div class="w-[594px] h-[736px] bg-background-grey border-[#E0E0E0] border-[5px] rounded-[51px] shadow-lg flex flex-col items-center py-8 px-4">
    <!-- Logo -->
    <div class="w-full flex justify-center mb-16">
      <img src="path/to/logo.png" alt="Logo" style="width: 154px; height: 49px;">
    </div>
    <!-- Image -->
    <div class="w-full flex justify-center mb-16">
      <img src="path/to/image.jpg" alt="Sample Image" style="width: 320px; height: 320px;">
    </div>
    <!-- Button -->
    <button class="bg-dark-green hover:bg-dark-green-900 text-white font-bold py-2 px-4 rounded-full" style="width: 161px; height: 83px;">
      Click to Buy
    </button>
  </div>
</div>
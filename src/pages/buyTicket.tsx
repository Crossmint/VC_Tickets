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
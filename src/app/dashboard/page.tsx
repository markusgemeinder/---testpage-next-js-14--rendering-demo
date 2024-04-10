'use client';

import { useState } from 'react';

export default function DashboardPage() {
  console.log('Dashboard client component');
  // client components are rendered once on the server an then on the client >>> see console.log also in terminal

  const [name, setName] = useState('');
  return (
    <div>
      <h1>Dashboard Page</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}</p>
    </div>
  );
}

'use client';

import { useState } from 'react';

export const ClientComponentOne = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState('Batman');
  return (
    <>
      <h1>Client component one</h1>
      {children}
    </>
  );
};

// as server component cannot be nested and invoked in a client component, instead pass it as a prop {children}

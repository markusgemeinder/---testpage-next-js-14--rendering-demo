// 'use client';
// import { useState } from 'react';
import { NavLinks } from './nav-links';
import { NavSearch } from './nav-search';

export const Navbar = () => {
  //   const [search, setSearch] = useState('');
  console.log(`Navbar rendered`);

  return (
    <div>
      <NavLinks />
      <NavSearch />
    </div>
  );
};

// if parent component is made a client component by "use client" als children will be client components as well

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Rendering demo page</h1>
      <Link href='/dashboard'>Dashboard</Link>
    </>
  );
}

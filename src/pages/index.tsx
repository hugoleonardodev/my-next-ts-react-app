import React from 'react';
import Link from 'next/link';

type HomeProps = {
  message: string;
};

// type LinkType = {
//   Link: NavigationType;
// };

export default function Home({ message }: HomeProps): JSX.Element {
  return (
    <div>
      <h1>{message}</h1>
      <Link href="/forms">
        <a>Go to Forms</a>
      </Link>
      <Link href="/myclass">
        <a>Go to Class component</a>
      </Link>
      <Link href="/nextpage">
        <a>Go to Next Page Concept</a>
      </Link>
    </div>
  );
}

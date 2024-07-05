"use client"
import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ statusCode }) {
  useEffect(() => {
    // Any custom logic to run on error
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-900">
      <h1 className="text-6xl font-bold">{statusCode}</h1>
      <p className="text-2xl mt-4">
        {statusCode === 404
          ? 'Page Not Found'
          : 'An unexpected error has occurred'}
      </p>
      <Link href="/">
        <a className="mt-6 text-blue-600 hover:text-blue-800">
          Go back to Home
        </a>
      </Link>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

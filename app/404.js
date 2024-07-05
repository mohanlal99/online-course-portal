
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-900">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl mt-4">Page Not Found</p>
      <Link href="/">
        <a className="mt-6 text-blue-600 hover:text-blue-800">
          Go back to Home
        </a>
      </Link>
    </div>
  );
}

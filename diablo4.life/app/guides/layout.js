import Link from 'next/link';

export default function Page({ children }) {
  return (
    <div>
      <div className="flex items-center gap-0.5 text-xs">
        <span className="text-gray-500">
          <Link href="/" className="text-gray-500 hover:underline">
            Home
          </Link>
        </span>
        <span className="text-gray-500">
          {'>'}
          <Link href="/guides" className="text-gray-500 hover:underline">
            Guides
          </Link>
        </span>
      </div>
      {children}
    </div>
  );
}

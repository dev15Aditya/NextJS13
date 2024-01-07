export default function Page({ children }) {
  return (
    <div>
      <div className="flex items-center gap-0.5 text-xs">
        <span className="text-gray-500">
          <a href="/" className="text-gray-500 hover:underline">
            Home
          </a>
        </span>
        <span className="text-gray-500">
          {'>'}
          <a href="/tier-lists" className="text-gray-500 hover:underline">
            Tier Lists
          </a>
        </span>
      </div>
      {children}
    </div>
  );
}

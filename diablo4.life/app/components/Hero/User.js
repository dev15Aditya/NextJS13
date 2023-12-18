export default function User({ user }) {
  return (
    <div className="flex items-center mb-2">
      <div className="h-2 w-2 rounded-full bg-green-400"></div>
      <div className="text-gray-300 text-sm ml-2">{user}</div>
    </div>
  );
}

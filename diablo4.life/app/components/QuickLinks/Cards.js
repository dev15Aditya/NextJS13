import Link from 'next/link';
import data from './Link.json';

function Card({ path, name }) {
  return (
    <div className="mx-2">
      <Link
        href={path}
        className="text-gray-200 text-[1rem] bold p-6 bg-[#252630] rounded-tl-lg rounded-br-lg"
      >
        {name}
      </Link>
    </div>
  );
}
export default function Cards({ path, name }) {
  return (
    <div className="flex items-center">
      {data.map((item) => (
        <Card key={name} path={item.path} name={item.name} />
      ))}
    </div>
  );
}

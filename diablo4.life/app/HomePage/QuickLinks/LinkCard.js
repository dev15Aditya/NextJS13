import Card from './Card';
import data from './Link.json';

export default function LinkCard({ path, name }) {
  return (
    <div className="my-5">
      <h1 className="text-gray-200 text-[20px]">Quick Links</h1>
      <div className="flex">
        {data.map((item) => (
          <Card key={name} path={item.path} name={item.name} />
        ))}
      </div>
    </div>
  );
}

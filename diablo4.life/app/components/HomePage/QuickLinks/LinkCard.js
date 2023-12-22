import Card from './Card';
import data from './Link.json';

export default function LinkCard({ path, name }) {
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-gray-200 text-lg">Quick Links</h1>
      <div className="flex flex-wrap">
        {data.map((item) => (
          <Card key={name} path={item.path} name={item.name} />
        ))}
      </div>
    </div>
  );
}

import Card from './Card';
import data from './Data.json';

export default function CardList() {
  return (
    <div className="flex flex-nowrap overflow-x-auto select-none">
      {data.map((item) => (
        <Card
          key={item.id}
          url={item.url}
          title={item.title}
          heading={item.heading}
          editDetail={item.editDetail}
          updateDetails={item.updateDetail}
        />
      ))}
    </div>
  );
}

import TierCard from './Card';
import data from './tierdata.json';

export default function TierListPage() {
  return (
    <div>
      <h1 className="text-3xl font-medium my-5 text-[#fdfdfd]">
        Diablo 4 Tier List
      </h1>
      <div className="grid gap-2 grid-cols-2 md:grid-cols-3">
        {data.map((tier) => {
          return (
            <TierCard
              key={tier.id}
              link={tier.link}
              url={tier.img}
              title={tier.title}
              description={tier.description}
              time={tier.time}
            />
          );
        })}
      </div>
    </div>
  );
}

import Card from './Card';
import data from './data.json';

export default function TierListPage() {
  return (
    <div>
      <h1 className="text-3xl font-medium my-5 text-[#fdfdfd]">
        S2 Nightmare Dungeon Tier List
      </h1>

      <p className="text-[#bcbcbc] text-[16px]">
        This Tier List gives a ranking of the best dungeons for both Farming
        Experience and Leveling Glyphs. There currently 30 Nightmare Dungeons in
        rotation, which changes every season.
      </p>

      <h1 className="text-2xl text-[#fdfdfd] my-4">Eperience Farming</h1>

      <p className="text-[#bcbcbc] text-[16px]">
        The following tier list gives an overview of the highest density
        dungeons, giving the most experience and also dropping the most items.
      </p>

      <div>
        <p className="text-[#bcbcbc] my-5">
          <span className="text-[#fdfdfd]">S</span> Best option |{' '}
          <span className="text-[#fdfdfd]">A</span> Viable option |{' '}
          <span className="text-[#fdfdfd]">B</span> Optional |
          <span className="text-[#fdfdfd]"> F</span> Avoid
        </p>
        {data.map((tier) => (
          <Card key={tier.id} data={tier} />
        ))}
      </div>
    </div>
  );
}

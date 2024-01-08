import Card from './Card';
import data from './data.json';

export default function TierListPage() {
  return (
    <div>
      <h1 className="text-3xl font-medium my-5 text-[#fdfdfd]">
        Vampiric Power Tier List
      </h1>

      <div>
        <p className="text-[#bcbcbc] my-5">
          <span className="text-[#fdfdfd]">S</span> Best option |{' '}
          <span className="text-[#fdfdfd]">A</span> Viable option |{' '}
          <span className="text-[#fdfdfd]">B</span> Rarely used |
          <span className="text-[#fdfdfd]"> F</span> Avoid or off-Meta
        </p>
        {data.map((tier) => (
          <Card key={tier.id} data={tier} />
        ))}
      </div>
    </div>
  );
}

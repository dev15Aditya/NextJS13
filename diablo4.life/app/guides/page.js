import data from './data.json';
import Card from './Card';

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-medium my-5 text-[#fdfdfd]">
        Diablo 4 Guides
      </h1>

      <div className="flex justify-between items-center">
        <div className="text-[#bcbcbc]">Showing {data.length} articles</div>

        <div className="flex items-center">
          <svg
            width="30"
            height="30"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:bg-[#44495a] m-1 p-1 rounded"
          >
            <path
              d="M10.5 3h-7v7h7V3zM21.5 3h-7v7h7V3zM21.5 14h-7v7h7v-7zM10.5 14h-7v7h7v-7z"
              stroke="#FCFDFD"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:bg-[#44495a] m-1 p-1 rounded"
          >
            <path
              d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
              stroke="#FCFDFD"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
        {data.map((item) => {
          return <Card key={item} data={item} />;
        })}
      </div>
    </div>
  );
}

import data from './data.json';

export default function GlyphTable() {
  const fields = ['Glyph Lvel', '# of Nightmare Dungeons'];

  return (
    <div className="text-[#fdfdfd] md:w-[70%] mx-auto">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase  dark:text-gray-400">
            <tr className="flex justify-between">
              {fields.map((field) => (
                <th key={field} class="px-2 py-3">
                  {field.toLowerCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr
                key={row.id}
                class="odd:bg-[#393E4C] even:bg-[#252630] border-b dark:border-gray-700 flex justify-between rounded-t-lg"
              >
                <td class="px-2 py-4">{row[0]}</td>
                <td class="px-2 py-4">{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

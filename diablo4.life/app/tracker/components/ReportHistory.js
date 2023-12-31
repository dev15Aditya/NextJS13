export default function ReportHistory({ data }) {
  const fields = ['user', 'area', 'end time', 'status'];

  return (
    <div className="text-[#fdfdfd] md:w-[70%] mx-auto my-10">
      <h1>Report History</h1>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase  dark:text-gray-400">
            <tr>
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
                class="odd:bg-[#393E4C] even:bg-[#252630] border-b dark:border-gray-700"
              >
                <td class="px-2 py-4">{row.user}</td>
                <td class="px-2 py-4">{row.area}</td>
                <td class="px-2 py-4">{row.endTime}</td>
                <td class="px-2 py-4">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const generator = require("fake-names");

export default function History() {
  return (
    <div className="overflow-y-scroll w-full rounded-lg h-[55vh]">
      <table className="w-full">
        <thead className="bg-[#333] text-white">
          <tr>
            <th
              scope="col"
              className="px-2 py-2 text-xs font-bold text-left uppercase border-r border-[#4c4c4c]"
            >
              BUST
            </th>
            <th
              scope="col"
              className="px-2 py-2 text-xs font-bold text-right uppercase border-r border-[#4c4c4c]"
            >
              @
            </th>
            <th
              scope="col"
              className="px-2 py-2 text-xs font-bold text-right uppercase border-r border-[#4c4c4c]"
            >
              BET
            </th>
            <th
              scope="col"
              className="px-2 py-2 text-xs font-bold text-right uppercase"
            >
              PROFIT
            </th>
            <th
              scope="col"
              className="px-2 py-2 text-xs font-bold text-right uppercase"
            >
              HASH
            </th>
          </tr>
        </thead>
        <tbody>
          {Array(15)
            .fill(null)
            .map((val, index) => (
              <tr
                key={index}
                className="transition duration-300 ease-in-out text-green-400 hover:bg-[#333]"
              >
                <td className="px-1 py-2 text-sm text-right whitespace-nowrap border border-[#4c4c4c]">
                  {Math.floor(Math.random() * 1000) / 100}x
                </td>
                <td className="px-1 py-2 text-sm text-right whitespace-nowrap">
                  -
                </td>
                <td className="px-1 py-2 text-sm font-medium text-right whitespace-nowrap">
                  -
                </td>
                <td className="px-1 py-2 text-sm font-medium text-right whitespace-nowrap">
                  -
                </td>
                <td className="px-1 py-2 text-sm font-medium text-right whitespace-nowrap">
                  {generator.getName()}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

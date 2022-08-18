const generator = require("fake-names");

interface PlayersProps {
  customHeight: string;
}

export default function Players(props: PlayersProps) {
  return (
    <>
      <div className={`overflow-y-scroll rounded-lg h-[${props.customHeight}]`}>
        <table className="w-full table-fixed">
          <thead className="bg-[#333] text-white">
            <tr>
              <th
                scope="col"
                className="px-2 py-2 text-xs font-bold text-left uppercase border-r border-[#4c4c4c]"
              >
                USER
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
            </tr>
          </thead>
          <tbody>
            {Array(20)
              .fill(null)
              .map((val, index) => (
                <tr
                  key={index}
                  className="transition duration-300 ease-in-out text-[#e58929] hover:bg-[#333]"
                >
                  <td className="px-1 py-2 text-sm whitespace-nowrap border border-[#4c4c4c]">
                    {generator.getName()}
                  </td>
                  <td className="px-1 py-2 text-sm text-right whitespace-nowrap">
                    -
                  </td>
                  <td className="px-1 py-2 text-sm font-medium text-right whitespace-nowrap">
                    {Math.floor(Math.random() * 10000)}
                  </td>
                  <td className="px-1 py-2 text-sm font-medium text-right whitespace-nowrap">
                    -
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex text-white mt-5">
        <div className="ml-2">Online: 835</div>
        <div className="mx-auto">Playing: 199</div>
        <div className="mr-2">Betting: 40,511 bits</div>
      </div>
    </>
  );
}

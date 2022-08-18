const randomSentence = require("random-sentence");
const generator = require("fake-names");

export default function Chat() {
  return (
    <div className="block w-full">
      <div className="overflow-y-scroll rounded-lg h-[51vh] lg:h-[55h] bg-[#4c4c4c] w-full">
        {Array(50)
          .fill(null)
          .map((item, index) => {
            return (
              <div key={index}>
                <span className="ml-2 mr-2 text-gray-400 text-[12px]">
                  23:46
                </span>
                <span className="mr-2 text-yellow-500">
                  {generator.getName()}:
                </span>
                <span className="text-white">
                  {randomSentence({ words: 10 })}
                </span>
              </div>
            );
          })}
      </div>
      <input
        type="text"
        className="w-full bg-[#555] border border-red-400 p-1 text-white"
      />
    </div>
  );
}

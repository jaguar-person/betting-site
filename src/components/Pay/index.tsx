import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Pay() {
  return (
    <>
      <div className="flex">
        <button className="w-[14%] bg-white text-red-400 py-2 px-3 rounded-tl-sm rounded-bl-sm">
          Bet
        </button>
        <input
          type="text"
          className="w-[58%] bg-transparent border border-red-300 px-2 text-red-400"
        />
        <button className="w-[14%] bg-yellow-500 text-black py-2 px-3 rounded-sm">
          bits
        </button>
        <button className="w-[14%] bg-gray-600 text-gray-500 py-2 px-3 rounded-sm">
          BTC
        </button>
      </div>
      <div className="flex mt-5">
        <button className="w-[23%] bg-gray-600 text-white py-2 px-3 rounded-tl-sm rounded-bl-sm">
          Payout
        </button>
        <input
          type="text"
          className="w-[67%] bg-transparent border border-gray-400 px-2 text-white"
        />
        <button className="w-[10%] bg-gray-600 text-white py-2 px-3 rounded-sm">
          X
        </button>
      </div>
      <button className="rounded-lg bg-yellow-600 text-white py-3 text-center w-full mt-5 font-bold">
        <FontAwesomeIcon icon={faStar} className="mr-3" />B E T
      </button>
      <p className="text-gray-400 mt-2 text-right">Hotkeys: off</p>
      <div className="flex">
        <div className="mr-auto text-gray-400 w-28">Target profits:</div>
        <div className="mr-auto text-white">0 bits</div>
      </div>
      <div className="flex">
        <div className="mr-auto text-gray-400 w-28">Win chances:</div>
        <div className="mr-auto text-white">49.5%</div>
      </div>
    </>
  );
}

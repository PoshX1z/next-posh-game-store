import React from "react";
import games from "@/game store datas/data/data";
import BannerCart from "@/components/BannerCart";
import Link from "next/link";

const page = () => {
  //turn into array so it can map with them
  const gameArrays = Object.keys(games).map((key) => ({
    name: key,
    ...games[key],
  }));

  return (
    <div className="flex gap-20 pt-8">
      <div className="w-2/3 min-h-screen bg-sky-800">
        <h1 className="text-white text-2xl font-extrabold p-3">
          Here's Your Cart:
        </h1>
        {gameArrays.map((game, index) => (
          <BannerCart
            key={index}
            count={index + 1}
            src={game.src}
            alt={game.alt}
            title={game.title}
            price={game.price}
          />
        ))}
      </div>
      <div className="w-1/3 h-[300px] bg-sky-800 p-10 flex flex-col items-center justify-center gap-10">
        <h1 className="text-white font-extrabold text-3xl">
          Total Price: $1065.97
        </h1>
        <Link href="/payment">
          <div className="p-2 border-4 border-sky-400 bg-sky-300 hover:bg-sky-600 active:bg-sky-800">
            <h1 className="text-white font-extrabold text-2xl">
              Continue To Payment
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default page;

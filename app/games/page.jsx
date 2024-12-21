import Banner from "@/components/Banner";
import React from "react";
import games from "@/game store datas/data/data";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const page = () => {
  //turn into array so it can map with them
  const gameArrays = Object.keys(games).map((key) => ({
    name: key,
    ...games[key],
  }));

  return (
    <div>
      <h1 className="pt-3 text-sky-900 font-extrabold text-3xl">All Games:</h1>
      <div className="flex flex-wrap pt-5 gap-14">
        {gameArrays.map((game, index) => (
          <Banner
            key={index}
            src={game.src}
            alt={game.alt}
            title={game.title}
            price={game.price}
          />
        ))}
      </div>
    </div>
  );
};

export default page;

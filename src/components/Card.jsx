/* eslint-disable react/prop-types */
import React from "react";

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[250px] md:h-[450px] w-full overflow-hidden bg-neutral-200 rounded-xl transition-transform duration-300 group-hover:scale-105"
    >
      <div
        style={{
          backgroundImage: `url(/imgs/abstract/${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/50 to-transparent" />
      <div className="absolute bottom-0 w-full bg-black/70 p-4 text-center text-white font-bold text-2xl">
        {card.title} - ${card.price}
      </div>
    </div>
  );
};

export default Card;

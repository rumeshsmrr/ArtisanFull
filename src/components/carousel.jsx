import { useRef } from "react";

const GridDisplay = () => {
  const targetRef = useRef(null);

  return (
    <section ref={targetRef} className="relative h-auto bg-black py-16">
      {/* Title on top */}
      <div className="text-center mb-8">
        <h2 className="text-4xl text-white font-bold uppercase font-[Olivera]">
          Artisan Antiques
        </h2>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-12">
        {cards.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      style={{
        backgroundImage: `url(/imgs/abstract/${card.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="group relative h-[250px]  md:h-[450px] w-full overflow-hidden bg-neutral-200 rounded-xl transition-transform duration-300 group-hover:scale-105"
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/50 to-transparent" />

      {/* Price Section */}
      <div className="absolute bottom-0 w-full bg-black/70 p-4 text-center text-white font-[Olivera] font-bold text-2xl">
        ${card.price}
      </div>
    </div>
  );
};

export default GridDisplay;

const cards = [
  { url: "11.jpg", title: "Antique Vase", price: "400", id: 1 },
  { url: "12.jpg", title: "Vintage Clock", price: "150", id: 2 },
  { url: "13.jpg", title: "Classic Chair", price: "200", id: 3 },
  { url: "14.jpg", title: "Porcelain Lamp", price: "500", id: 4 },
  { url: "15.jpg", title: "Rustic Table", price: "2500", id: 5 },
  { url: "16.jpg", title: "Decorative Mirror", price: "2500", id: 6 },
  { url: "17.jpg", title: "Victorian Painting", price: "1750", id: 7 },
  { url: "18.jpg", title: "Marble Statue", price: "500", id: 8 },
];

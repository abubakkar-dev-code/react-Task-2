import React from "react";

const roasts = [
  {
    name: "Attikan Estate",
    description: "Chocolate and orange peel. Medium roast, good for filter and moka pot.",
  },
  {
    name: "Kolli Hills Natural",
    description: "Dried mango and cocoa nibs. Light roast, best as pour-over.",
  },
  {
    name: "House Blend",
    description: "Caramel and toasted almond. Dark-medium roast, made for milk coffee.",
  },
];

const Roasting = () => {
  return (
    <section className="bg-[#F2F4F8] py-10 px-6">
      <div className="max-w-300 mx-auto">
        <h2 className="text-4xl font-bold text-[#111A2E] tracking-tight mb-8">
          What&apos;s roasting
        </h2>

        <div className="flex flex-col">
          {roasts.map((roast, index) => (
            <div
              key={index}
              className="py-6 border-b border-[#D5DDE8] flex items-baseline gap-12"
            >
              <h3 className="text-xl font-bold text-[#111A2E] w-72 shrink-0">
                {roast.name}
              </h3>
              <p className="text-[#4A5568] font-serif text-lg leading-relaxed">
                {roast.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roasting;
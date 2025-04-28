import React from "react";
import { abilities } from "../constants";

const FeatureCards = () => {
  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            className="flex flex-col gap-4 p-8 card-border rounded-xl"
          >
            <div className="flex items-center justify-center rounded-full size-14">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
            <p className="text-lg text-white-50">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;

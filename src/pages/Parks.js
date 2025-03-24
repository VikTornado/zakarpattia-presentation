import React, { useState } from "react";
import { parks } from "../data/parksData";
import ParkAccordionCard from "../components/ParkAccordionCard";

function Parks({ language }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {parks.map((park, index) => (
          <ParkAccordionCard
            key={index}
            park={park}
            language={language}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Parks;

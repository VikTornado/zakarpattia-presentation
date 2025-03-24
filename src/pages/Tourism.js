import React from "react";

function Tourism({ language }) {
  return (
    <div className="p-8 bg-gray-50 min-h-screen pt-20">
      <h1 className="text-3xl font-bold text-center mb-6">
        {language === "uk" ? "Туризм" : "Tourism"}
      </h1>

      <div className="max-w-3xl mx-auto space-y-6 text-lg">
        <p>
          {language === "uk"
            ? "Закарпаття — один із наймальовничіших куточків України, розташований на південно-західних схилах і передгір'ях Українських Карпат."
            : "Transcarpathia is one of the most picturesque corners of Ukraine, located on the southwestern slopes and foothills of the Ukrainian Carpathians."}
        </p>

        <p>
          {language === "uk"
            ? "Туризм стає все більш поширеним і вже перетворився на одну з провідних, прибуткових та динамічних галузей світової економіки."
            : "Tourism is becoming widespread and has already become one of the leading, highly profitable, and most dynamic sectors of the world economy."}
        </p>

        <p>
          {language === "uk"
            ? "Мережа оздоровчих, рекреаційних та туристичних об'єктів на території Закарпатської області під час воєнного стану налічує 706 об'єктів, зокрема: 23 заклади охорони здоров’я."
            : "The network of health, recreation, and tourist facilities on the territory of Zakarpattia region during martial law includes 706 objects, including: 23 health facilities."}
        </p>

        <p>
          {language === "uk"
            ? "Регіон може прийняти близько 30 000 осіб, майже 600 сільських садиб, готових надавати туристичні послуги, та 20 туристично-інформаційних центрів."
            : "The region can accommodate about 30,000 people, almost 600 rural estates that are ready to provide tourist services, and 20 tourist information centers."}
        </p>
      </div>
    </div>
  );
}

export default Tourism;

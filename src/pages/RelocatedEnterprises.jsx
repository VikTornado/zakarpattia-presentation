import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

function RelocatedEnterprises({ language = "uk" }) {
  const data = {
    uk: [
      { name: "Виробництво металевих виробів", value: 20 },
      { name: "Виробництво машин та обладнання", value: 11.3 },
      { name: "Виробництво одягу та взуття", value: 10 },
      { name: "Виробництво обладнання", value: 8.8 },
      { name: "Обробка деревини", value: 8.8 },
      { name: "Виробництво харчових продуктів", value: 8.8 },
      { name: "Комп'ютерна та електронна продукція", value: 5 },
      { name: "Фармацевтична продукція", value: 3.8 },
      { name: "Металургійна продукція", value: 2.5 },
      { name: "Інше", value: 21 },
    ],
    en: [
      { name: "Manufacture of fabricated metal products", value: 20 },
      { name: "Manufacture of machinery and equipment", value: 11.3 },
      { name: "Clothing and footwear production", value: 10 },
      { name: "Machinery and equipment production", value: 8.8 },
      { name: "Processing of wood and wood products", value: 8.8 },
      { name: "Manufacture of food products", value: 8.8 },
      { name: "Computers, electronic and optical products", value: 5 },
      { name: "Pharmaceutical products", value: 3.8 },
      { name: "Metallurgical production", value: 2.5 },
      { name: "Other", value: 21 },
    ],
  };

  const COLORS = [
    "#1e3d35",
    "#f6e84e",
    "#f59e0b",
    "#284b63",
    "#d62828",
    "#29339b",
    "#8d5a43",
    "#98c1d9",
    "#f28585",
    "#0278ae",
  ];

  const chartData = data[language] || data["uk"];

  return (
    <div className="min-h-screen flex flex-col p-4 bg-gray-50 pt-12 pb-32">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {language === "uk"
          ? "Основні види діяльності переміщених підприємств"
          : "Main activities of relocated enterprises"}
      </h1>

      <div className="flex flex-col items-center justify-center gap-8 flex-grow">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={120}
              label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
              dataKey="value"
            >
              {chartData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              layout="horizontal"
              align="center"
              verticalAlign="bottom"
              wrapperStyle={{ paddingTop: "20px", fontSize: "14px" }}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="text-lg px-4 sm:px-6 md:px-12 max-w-screen-md mx-auto text-justify pb-32">
          {language === "uk"
            ? "З початку повномасштабного вторгнення Росії на Закарпаття переїхало 286 підприємств з інших регіонів України. З них 80 одиниць – це підприємства переробної промисловості."
            : "Since the beginning of Russia's full-scale invasion, 286 business entities have relocated to Zakarpattia from other regions of Ukraine. 80 units of these are enterprises of the processing industry."}
        </div>
      </div>
    </div>
  );
}

export default RelocatedEnterprises;

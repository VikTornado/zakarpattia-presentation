import React, { useState, useContext } from "react";
import data from "../data/industrial_parks_10.json";
import { LanguageContext } from "../LanguageContext";

export default function IndustrialParksPage() {
  const { language } = useContext(LanguageContext);
  const [selectedPark, setSelectedPark] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        {language === "uk"
          ? "Індустріальні парки Закарпаття"
          : "Industrial Parks of Zakarpattia"}
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {data.map((park) => (
          <div
            key={park.id}
            className="border border-gray-300 p-6 rounded-xl shadow-sm bg-white hover:shadow-md cursor-pointer"
            onClick={() => setSelectedPark(park)}
          >
            <h2 className="text-xl font-semibold mb-2">
              {park.name[language]}
            </h2>
            <p className="text-sm text-gray-600 mb-1">
              {park.location[language]}
            </p>
            <p className="text-sm mb-1">
              <strong>{language === "uk" ? "Площа:" : "Area:"}</strong>{" "}
              {park.area}
            </p>
            <p className="text-sm mb-1">
              <strong>
                {language === "uk" ? "Працівників до:" : "Capacity:"}
              </strong>{" "}
              {park.employeesPlanned || park.employees || "-"}
            </p>
            <p className="text-sm">
              {park.description[language]?.slice(0, 100)}...
            </p>
          </div>
        ))}
      </div>

      {selectedPark && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
          onClick={() => setSelectedPark(null)}
        >
          <div
            className="bg-white p-6 rounded-xl max-w-2xl w-full relative overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-4 text-gray-500 hover:text-red-500 text-2xl"
              onClick={() => setSelectedPark(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">
              {selectedPark.name[language]}
            </h2>
            <p className="text-sm mb-2">
              <strong>{language === "uk" ? "Локація:" : "Location:"}</strong>{" "}
              {selectedPark.location[language]}
            </p>
            <p className="text-sm mb-2">
              <strong>{language === "uk" ? "Площа:" : "Area:"}</strong>{" "}
              {selectedPark.area}
            </p>
            <p className="text-sm mb-2">
              <strong>
                {language === "uk" ? "Працівників до:" : "Capacity:"}
              </strong>{" "}
              {selectedPark.employeesPlanned || selectedPark.employees || "-"}
            </p>
            <p className="mb-4 whitespace-pre-line">
              <strong>{language === "uk" ? "Опис:" : "Description:"}</strong>
              <br />
              {selectedPark.description[language]}
            </p>

            {selectedPark.employment && (
              <div className="mt-4 text-sm text-gray-700 space-y-1">
                <p>
                  <strong>
                    {language === "uk"
                      ? "Працівників зараз:"
                      : "Employees now:"}
                  </strong>{" "}
                  {selectedPark.employment.employeesNow}
                </p>
                <p>
                  <strong>
                    {language === "uk" ? "Сплачені податки:" : "Taxes paid:"}
                  </strong>{" "}
                  {selectedPark.employment.taxesPaid}
                </p>
                <p>
                  <strong>
                    {language === "uk" ? "Місцевий бюджет:" : "Local budget:"}
                  </strong>{" "}
                  {selectedPark.employment.localBudget}
                </p>
                <p>
                  <strong>
                    {language === "uk" ? "Пенсійний фонд:" : "Pension fund:"}
                  </strong>{" "}
                  {selectedPark.employment.pensionFund}
                </p>
              </div>
            )}

            {(selectedPark.images || selectedPark.image) && (
              <img
                src={selectedPark.images?.[0] || selectedPark.image}
                alt={selectedPark.name[language]}
                className="mt-6 rounded-lg w-full object-cover"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

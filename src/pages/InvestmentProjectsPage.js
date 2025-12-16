import React, { useState, useEffect, useContext } from "react";
import projectsData from "../data/investmentProjects.json";
import { LanguageContext } from "../LanguageContext";

function InvestmentProjectsPage() {
  const { language } = useContext(LanguageContext);
  const [yearFilter, setYearFilter] = useState("Усі роки");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const getYearFromId = (id) => {
    if (id <= 10) return "2022";
    if (id <= 20) return "2023";
    return "2024";
  };

  useEffect(() => {
    if (yearFilter === "Усі роки") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((proj) => getYearFromId(proj.id) === yearFilter)
      );
    }
  }, [yearFilter]);

  const years = ["Усі роки", "2022", "2023", "2024"];
console.log("Current language:", language);
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        {language === "uk" ? "Інвестиційні проєкти" : "Investment Projects"}
      </h1>

      <div className="mb-6">
        <label className="mr-4 font-semibold">
          {language === "uk" ? "Фільтр за роком:" : "Filter by year:"}
        </label>
        <select
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
          className="px-3 py-2 rounded bg-gray-100 text-black"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-300 rounded-xl p-6 shadow-sm bg-white"
          >
            <h2 className="text-xl font-semibold mb-1">
              {project.name[language]}
            </h2>
            <p className="text-sm text-gray-600 mb-2">
              {project.address[language]}
            </p>

            {project.email && (
              <p className="mb-1">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href={`mailto:${project.email}`}
                  className="text-blue-500 underline"
                >
                  {project.email}
                </a>
              </p>
            )}

            {project.area && (
              <p>
                <span className="font-semibold">
                  {language === "uk" ? "Площа:" : "Area:"}
                </span>{" "}
                {project.area}
              </p>
            )}

            {project.relocatedFrom && (
              <p>
                <span className="font-semibold">
                  {language === "uk" ? "Релоковано з:" : "Relocated from:"}
                </span>{" "}
                {project.relocatedFrom}
              </p>
            )}

            <p>
              <span className="font-semibold">
                {language === "uk" ? "Сектор:" : "Sector:"}
              </span>{" "}
              {project.sector?.join(", ")}
            </p>

            <p>
              <span className="font-semibold">
                {language === "uk" ? "Категорія:" : "Category:"}
              </span>{" "}
              {project.category?.join(", ")}
            </p>

            {project.descriptionFull && (
              <p className="mt-2 whitespace-pre-line">
                <span className="font-semibold">
                  {language === "uk"
                    ? "Опис діяльності та продукції:"
                    : "Description of activities and products:"}
                </span>
                <br />
                {project.descriptionFull[language === "uk" ? "ua" : "en"]}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InvestmentProjectsPage;

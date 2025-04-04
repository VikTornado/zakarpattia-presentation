import React, { useState, useContext } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { LanguageContext } from "../LanguageContext";

  function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  const { language, toggleLanguage } = useContext(LanguageContext); // <-- ось тут

  const menuLinks = [
    {
      labelUk: "Головна",
      labelEn: "Home",
      path: "/",
      subLinks: [],
    },
    {
      labelUk: "Про регіон",
      labelEn: "About",
      path: "/about",
      subLinks: [
        { path: "/summary", labelUk: "Огляд", labelEn: "Summary" },
        { path: "/advantages", labelUk: "Переваги", labelEn: "Advantages" },
        {
          path: "/infrastructure",
          labelUk: "Інфраструктура",
          labelEn: "Infrastructure",
        },
        { path: "/tourism", labelUk: "Туризм", labelEn: "Tourism" },
        {
          path: "/international",
          labelUk: "Міжнародна співпраця",
          labelEn: "International",
        },
        { path: "/education", labelUk: "Освіта", labelEn: "Education" }, // 🔹 НОВЕ
      ],
    },
    {
      labelUk: "Економіка",
      labelEn: "Economy",
      path: "/economy",
      subLinks: [
        { path: "/industry", labelUk: "Промисловість", labelEn: "Industry" },
        {
          path: "/agriculture",
          labelUk: "Сільське господарство",
          labelEn: "Agriculture",
        },
        { path: "/minerals", labelUk: "Корисні копалини", labelEn: "Minerals" },
        { path: "/energy", labelUk: "Енергетика", labelEn: "Energy" },
      ],
    },
    {
      labelUk: "Інвестиції",
      labelEn: "Investment",
      path: "/investment",
      subLinks: [
        {
          path: "/opportunities",
          labelUk: "Можливості",
          labelEn: "Opportunities",
        },
        { path: "/taxation", labelUk: "Оподаткування", labelEn: "Taxation" },
        {
          path: "/parks",
          labelUk: "Індустріальні парки",
          labelEn: "Industrial Parks",
        },
        {
          path: "/relocated-enterprises",
          labelUk: "Переміщені підприємства",
          labelEn: "Relocated Enterprises",
        },
        {
          labelUk: "ІТ-сектор",
          labelEn: "IT Sector",
          path: "/it",
          subLinks: [],
        },
      ],
    },
    {
      labelUk: "Контакти",
      labelEn: "Contacts",
      path: "/contacts",
      subLinks: [],
    },
    {
      labelUk: "Презентація",
      labelEn: "Presentation",
      path: "/presentation",
      subLinks: [],
    },
  ];

  return (
    <header className="fixed top-0 w-full bg-[#171836] text-white p-4 flex justify-between items-center z-50 shadow-md">
      <div className="text-xl font-bold">Zakarpattia</div>

      <nav className="hidden lg:flex flex-1 justify-center space-x-6">
        {menuLinks.map((link, index) => {
          const isSubActive = link.subLinks.some((sub) =>
            location.pathname.startsWith(sub.path)
          );
          const isActive = location.pathname === link.path || isSubActive;

          return (
            <div
              key={index}
              className="relative flex items-center"
              onMouseEnter={() => setDropdownOpen(index)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button
                className={`px-4 py-2 rounded transition-all duration-300 ${
                  isActive
                    ? "text-white border-b-2 border-blue-400"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => {
                  if (link.subLinks.length === 0) {
                    window.location.href = link.path;
                  } else {
                    setDropdownOpen((prev) => (prev === index ? null : index));
                  }
                }}
              >
                {language === "uk" ? link.labelUk : link.labelEn}
              </button>

              {link.subLinks.length > 0 && (
                <div
                  className={`absolute left-0 top-full mt-2 w-56 bg-gray-800 text-white rounded shadow-lg z-50 transition-all duration-200 ${
                    dropdownOpen === index
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  {link.subLinks.map((subLink, subIndex) => (
                    <NavLink
                      key={subIndex}
                      to={subLink.path}
                      className={({ isActive }) =>
                        `block px-4 py-2 hover:bg-gray-700 ${
                          isActive ? "bg-gray-700 font-semibold" : ""
                        }`
                      }
                      onClick={() => setDropdownOpen(null)}
                    >
                      {language === "uk" ? subLink.labelUk : subLink.labelEn}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="hidden lg:block">
        <button
          onClick={toggleLanguage}
          className="bg-blue-500 px-3 py-1 rounded"
        >
          {language === "uk" ? "ENG" : "УКР"}
        </button>
      </div>

      {!menuOpen && (
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          <HiMenu />
        </button>
      )}

      {menuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 z-50 flex flex-col items-start p-6 w-3/4 h-screen overflow-y-auto">
          <button
            className="text-white text-2xl self-end mb-4"
            onClick={() => setMenuOpen(false)}
          >
            <HiX />
          </button>

          {menuLinks.map((link, index) => (
            <div key={index} className="w-full">
              <NavLink
                to={link.path}
                className="py-3 text-white text-lg w-full text-left hover:bg-gray-700 block"
                onClick={() => setMenuOpen(false)}
              >
                {language === "uk" ? link.labelUk : link.labelEn}
              </NavLink>
              {link.subLinks.length > 0 && (
                <div className="pl-4">
                  {link.subLinks.map((subLink, subIndex) => (
                    <NavLink
                      key={subIndex}
                      to={subLink.path}
                      className="py-2 text-white text-md w-full text-left hover:bg-gray-700 block"
                      onClick={() => setMenuOpen(false)}
                    >
                      {language === "uk" ? subLink.labelUk : subLink.labelEn}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}

          <button
            onClick={() => {
              toggleLanguage();
              setMenuOpen(false);
            }}
            className="mt-4 bg-blue-500 px-3 py-1 rounded w-full"
          >
            {language === "uk" ? "ENG" : "УКР"}
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;

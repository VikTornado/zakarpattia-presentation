import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";


function Header({ toggleLanguage, language }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

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
      ],
    },
    {
      labelUk: "Енергетика",
      labelEn: "Energy",
      path: "/energy",
      subLinks: [],
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
        {
          path: "/taxation",
          labelUk: "Оподаткування",
          labelEn: "Taxation",
        },
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
      ],
    },
    {
      labelUk: "Транспорт",
      labelEn: "Transport",
      path: "/transport",
      subLinks: [],
    },
    {
      labelUk: "Контакти",
      labelEn: "Contacts",
      path: "/contacts",
      subLinks: [],
    },
  ];

  return (
    <header className="fixed top-0 w-full bg-[#171836] text-white p-4 flex justify-between items-center z-50 shadow-md">
      <div className="text-xl font-bold">Zakarpattia</div>

      {/* Навігація для великих екранів */}
      <nav className="hidden lg:flex flex-1 justify-center space-x-6">
        {menuLinks.map((link, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setDropdownOpen(index)}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `hover:underline px-2 py-1 rounded transition-colors duration-300 ${
                  isActive ? "bg-blue-600 text-white" : "text-gray-300"
                }`
              }
            >
              {language === "uk" ? link.labelUk : link.labelEn}
            </NavLink>

            {link.subLinks.length > 0 && (
              <div
                className={`absolute left-0 top-full mt-2 w-56 bg-gray-800 text-white rounded shadow-lg z-50 transition-all duration-200 ${
                  dropdownOpen === index
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
                onMouseEnter={() => setDropdownOpen(index)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                {link.subLinks.map((subLink, subIndex) => (
                  <NavLink
                    key={subIndex}
                    to={subLink.path}
                    className="block px-4 py-2 hover:bg-gray-700"
                    onClick={() => setDropdownOpen(null)}
                  >
                    {language === "uk" ? subLink.labelUk : subLink.labelEn}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Кнопка зміни мови (тільки на великих екранах) */}
      <div className={`hidden lg:block ${menuOpen ? "hidden" : ""}`}>
        <button
          onClick={() => toggleLanguage()}
          className="bg-blue-500 px-3 py-1 rounded"
        >
          {language === "uk" ? "ENG" : "УКР"}
        </button>
      </div>

      {/* Кнопка відкриття Sidebar для мобільних */}
      {!menuOpen && (
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          <HiMenu />
        </button>
      )}

      {/* Sidebar (мобільне меню) */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 z-50 flex flex-col items-start p-6 w-3/4 h-screen">
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

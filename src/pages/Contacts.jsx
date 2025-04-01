import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaViber,
  FaWhatsapp,
  FaTelegramPlane,
  FaEnvelope,
} from "react-icons/fa";
import ContactForm from "../components/ContactForm";

function Contacts({ language }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50 text-center">
      <h1 className="text-3xl font-bold mb-6">
        {language === "uk" ? "Контакти" : "Contacts"}
      </h1>

      <div className="space-y-6 max-w-xl w-full">
        <div>
          <h2 className="font-semibold">
            {language === "uk"
              ? "Закарпатська обласна державна адміністрація"
              : "Zakarpattia Regional State Administration"}
          </h2>
          <p>
            {language === "uk"
              ? "пл. Народна, 4, Ужгород"
              : "Sq. Narodna, 4, Uzhhorod"}
          </p>
          <p>admin@carpathia.gov.ua</p>
          <p>(0312) 69-61-00, 69-60-80, 69-60-78</p>
        </div>

        <div>
          <h2 className="font-semibold">
            {language === "uk"
              ? "Департамент регіонального та економічного розвитку"
              : "Department of Regional and Economic Development"}
          </h2>
          <p>economy@carpathia.gov.ua</p>
          <p>(0312) 61-53-05, 61-29-18</p>
        </div>
        <div>
          <ContactForm language={language} />
        </div>

        Соцмережі
        <div className="flex gap-4 justify-center mt-8 flex-wrap">
          {[
            { icon: <FaFacebookF />, link: "#", label: "Facebook" },
            { icon: <FaInstagram />, link: "#", label: "Instagram" },
            { icon: <FaViber />, link: "#", label: "Viber" },
            { icon: <FaWhatsapp />, link: "#", label: "WhatsApp" },
            { icon: <FaTelegramPlane />, link: "#", label: "Telegram" },
            {
              icon: <FaEnvelope />,
              link: "mailto:info@example.com",
              label: "Email",
            },
          ].map((item, index) => (
            <div className="relative group" key={index}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`
          w-12 h-12 flex items-center justify-center
          text-white text-xl rounded-full
          bg-gradient-to-t from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-500
          shadow-lg transition-all duration-500 ease-in-out
          hover:scale-110 hover:ring-4 hover:ring-blue-400
          animate-[pulse_3s_ease-in-out_infinite]
        `}
                style={{ animationDelay: `${index * 0.4}s` }}
              >
                {item.icon}
              </a>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs rounded bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contacts;

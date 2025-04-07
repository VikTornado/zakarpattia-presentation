import React, { useContext } from "react";
import ContactForm from "../components/ContactForm";
import { LanguageContext } from "../LanguageContext";

function Contacts() {
  const { language } = useContext(LanguageContext);

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
      </div>
    </div>
  );
}

export default Contacts;

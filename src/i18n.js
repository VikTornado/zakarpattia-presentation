import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en", // Якщо не знайдеться переклад, використовуємо англійську
    debug: true,
    interpolation: {
      escapeValue: false, // Вимикає екранування для React
    },
    react: {
      useSuspense: false, // Для уникнення зависання
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Шлях до ваших файлів
    },
  });

export default i18n;

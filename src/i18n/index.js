import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "../locales/english.json";
import hiTranslations from "../locales/hindi.json";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // using the language detector plugin
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      hi: {
        translation: hiTranslations,
      },
    },
    lng: localStorage.getItem("i18nextLng")
      ? localStorage.getItem("i18nextLng")
      : "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

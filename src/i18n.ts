import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './translations/en.json';
import fr from './translations/fr.json';
i18n.use(initReactI18next).init({
    // Set the resources object for the languages
    resources: {
        en: { translation: en },
        fr: { translation: fr }
    },
    // Set the initial language of the App
    lng: "fr"
});
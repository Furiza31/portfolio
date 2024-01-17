import { i18nUse } from "./i18n";
import en from './translations/en.json';
import fr from './translations/fr.json';
import { languages } from './types/languages';

export const App = ({ children }: { children: React.ReactNode }) => {
    i18nUse.init({
        // Set the resources object for the languages
        resources: {
            en: { translation: en },
            fr: { translation: fr }
        },
        // Set the initial language of the App
        lng: languages.EN,
    });
    return <>{children}</>;
};
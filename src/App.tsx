import { useParams } from "react-router-dom";
import { i18nUse } from "./i18n";
import en from './translations/en.json';
import fr from './translations/fr.json';
import { languages } from './types/languages';
import { Navigate } from "react-router-dom";

export const App = ({ children }: { children: React.ReactNode }) => {
    const { currentLanguage } = useParams();
    if ((Object.values(languages) as string[]).includes(currentLanguage ?? '') === false) {
        return <Navigate to={`/${languages.EN}`} />;
    }
    i18nUse.init({
        // Set the resources object for the languages
        resources: {
            en: { translation: en },
            fr: { translation: fr }
        },
        // Set the initial language of the App
        lng: currentLanguage,
    });
    return <>{children}</>;
};
import { useTranslation } from "react-i18next"
import { languages } from "../types/languages";

export class translator {
    private static instance: translator;
    private languages = languages;
    private t: (arg0: string) => string | undefined = () => undefined;
    private i18n: { language: string; changeLanguage: (arg0: string) => void; } = { language: "", changeLanguage: () => {} };

    /**
     * Private constructor
     * @constructor
     * @private
     */
    private constructor() {}

    /**
     * Get the instance of the translator
     * @returns {translator} The instance of the translator
     */
    public static getInstance() {
        if (!this.instance) {
            this.instance = new translator();
        }
        const { t, i18n } = useTranslation();        
        this.instance.t = t;
        this.instance.i18n = i18n;
        return this.instance;
    }

    /**
     * Get the list of the languages
     * @returns {languages} The list of the languages
     * @public
     * @readonly
     * @example
     * const languages = translator.getInstance().getLanguages();
     */
    public getLanguages() {
        return this.languages;
    }

    /**
     * Get the current language
     * @returns {string} The current language
     * @public
     * @readonly
     * @example
     * const language = translator.getInstance().getLanguage();
     */
    public getLanguage() {
        return this.i18n.language;
    }

    /**
     * Get the translation of a key
     * @param {string} key The key of the translation
     * @returns {string} The translation
     * @public
     * @example
     * const translation = translator.getInstance().getTranslation("key");
     */
    public getTranslation(key: string) {
        return this.t(key);
    }

    /**
     * Change the language
     * @param {languages} language The language
     */
    public changeLanguage(language: languages) {
        this.i18n.changeLanguage(language);
    }
}
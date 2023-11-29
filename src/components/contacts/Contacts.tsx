import { translator } from '../../services/translator';
import '../../styles/contact/contact.scss';
import { ContactLinks } from './ContactLinks';

export const Contacts = () => {
    const t = translator.getInstance();

    return (
        <section className="contacts" id='contacts'>
            <fieldset>
                <legend>{t.getTranslation('header_contact')}</legend>
                <ContactLinks />
            </fieldset>
        </section>
    )
}
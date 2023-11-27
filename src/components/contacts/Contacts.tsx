import '../../styles/contact/contact.scss';
import { ContactLinks } from './ContactLinks';

export const Contacts = () => {
    return (
        <section className="contacts" id='contacts'>
            <fieldset>
                <legend>Contact</legend>
                <ContactLinks />
            </fieldset>
        </section>
    )
}
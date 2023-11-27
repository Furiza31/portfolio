import { translator } from '../../services/translator';
import '../../styles/contact/links.scss';
import { Fade } from 'react-awesome-reveal';

export const ContactLinks = () => {
    const t = translator.getInstance();

    return (
        <Fade cascade direction='up' duration={150}>
            <a href="https://github.com/Furiza31" target="_blank" className='contact_link'>
                <img src="/images/icons/github.svg" alt="Github" />
                {t.getTranslation('contact_link_github')}
            </a>
            <a href="https://www.linkedin.com/in/hugo-wendjaneh-036637252/" target="_blank" className='contact_link'>
                <img src="/images/icons/linkedin.svg" alt="Linkedin" />
                {t.getTranslation('contact_link_linkedin')}
            </a>
            <a href="mailto:hugo.wendjaneh@gmail.com" className='contact_link'>
                <img src="/images/icons/email.svg" alt="E-Mail" />
                {t.getTranslation('contact_link_email')}
            </a>
            <a href="/documents/CV.pdf" className='contact_link' target='_blank'>
                <img src="/images/icons/cv.svg" alt="CV" />
                {t.getTranslation('contact_link_cv')}
            </a>
        </Fade>
    )
}
import '../../styles/contact/links.scss';
import { Fade } from 'react-awesome-reveal';

export const ContactLinks = () => {
    return (
        <Fade cascade direction='up' duration={150}>
            <a href="https://github.com/Furiza31" target="_blank" className='contact_link'>
                <img src="/images/icons/github.svg" alt="Github" />
                Github
            </a>
            <a href="https://www.linkedin.com/in/hugo-wendjaneh-036637252/" target="_blank" className='contact_link'>
                <img src="/images/icons/linkedin.svg" alt="Linkedin" />
                Linkedin
            </a>
            <a href="mailto:hugo.wendjaneh@gmail.com" className='contact_link'>
                <img src="/images/icons/email.svg" alt="Mail" />
                hugo.wendjaneh@gmail.com
            </a>
        </Fade>
    )
}
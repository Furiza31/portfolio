import '../styles/header.scss';
import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { debounce } from '../utils/debouce';
import { translator } from '../services/translator';
import { languages } from '../types/languages';
import me from '../assets/images/me/me.png';
import home from '../assets/images/icons/home.svg';
import skills from '../assets/images/icons/skills.svg';
import projects from '../assets/images/icons/projects.svg';
import contact from '../assets/images/icons/contact.svg';
import languagesIcon from '../assets/images/icons/languages.svg';
import uk from '../assets/images/icons/flag/uk.svg';
import fr from '../assets/images/icons/flag/fr.svg';

export const Header = () => {
    const t = translator.getInstance();

    const [isScrolled, setIsScrolled] = useState<boolean>(window.scrollY > 30);
    const [isToggled, setIsToggled] = useState<boolean>(false);
    const mobileBreakpoint = 1300;
    
    const handleToggle = () => {
        setIsToggled(!isToggled);
    }

    const handleScroll = () => {
        if (window.scrollY > 30) setIsScrolled(true);
        else setIsScrolled(false);
    }

    const handleResize = debounce(() => {
            if (window.innerWidth > mobileBreakpoint) setIsToggled(false);
        }, 300);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleResize as EventListener)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize as EventListener)
        }
    })

    return(
        <header className={`${isScrolled ? 'scrolled' : ''} ${isToggled ? 'toggled' : ''}`}>
            <a href="" className='title'>
            <Fade cascade direction='up' duration={200}>
                <img src={me} alt="Me" />
                <h1>{t.getTranslation('me')}</h1>
            </Fade>
            </a>
            <nav>
                <Fade cascade direction='up' duration={100}>
                    <h1 className='menu-title'>{t.getTranslation('header_menu')}</h1>
                    <a href="#home" onClick={() => setIsToggled(false)}>
                        <img src={home} alt="Home" />
                        {t.getTranslation('header_home')}
                    </a>
                    <a href="#skills" onClick={() => setIsToggled(false)}>
                        <img src={skills} alt="Skills" />
                        {t.getTranslation('header_skills')}
                    </a>
                    <a href="#projects" onClick={() => setIsToggled(false)}>
                        <img src={projects} alt="Projects" />
                        {t.getTranslation('header_projects')}
                    </a>
                    <a href="#contacts" onClick={() => setIsToggled(false)}>
                        <img src={contact} alt="Contact" />
                        {t.getTranslation('header_contact')}
                    </a>
                    <div className='menu'>
                        <span>
                            <img src={languagesIcon} alt="Languages" />
                        </span>
                        <span>
                            {t.getTranslation('header_languages')}
                        </span>
                        <div className='submenu'>
                            <Fade cascade direction='up' duration={100}>
                                <button className={`language ${t.getLanguage() === languages.EN ? 'active' : ''}`}
                                    onClick={() => {t.changeLanguage(languages.EN); setIsToggled(false)}}>
                                    <img src={uk} alt="English" />
                                    {t.getTranslation('header_languages_english')}
                                </button>
                                <button className={`language ${t.getLanguage() === languages.FR ? 'active' : ''}`}
                                    onClick={() => {t.changeLanguage(languages.FR); setIsToggled(false)}}>
                                    <img src={fr} alt="French" />
                                    {t.getTranslation('header_languages_french')}
                                </button>
                            </Fade>
                        </div>
                    </div>
                </Fade>
            </nav>
            <div className='toggle' onClick={handleToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
}
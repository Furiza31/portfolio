import '../styles/header.scss';
import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { debounce } from '../utils/debouce';
import { translator } from '../services/translator';
import { languages } from '../types/languages';
import { Link } from 'react-router-dom';

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
                <img src="/images/me/me.png" alt="Me" />
                <h1>{t.getTranslation('me')}</h1>
            </Fade>
            </a>
            <nav>
                <Fade cascade direction='up' duration={150}>
                    <h1 className='menu-title'>{t.getTranslation('header_menu')}</h1>
                    <a href="#home" onClick={() => setIsToggled(false)}>
                        <img src="/images/icons/home.svg" alt="Home" />
                        {t.getTranslation('header_home')}
                    </a>
                    <a href="#skills" onClick={() => setIsToggled(false)}>
                        <img src="/images/icons/skills.svg" alt="Skills" />
                        {t.getTranslation('header_skills')}
                    </a>
                    <a href="#projects" onClick={() => setIsToggled(false)}>
                        <img src="/images/icons/projects.svg" alt="Projects" />
                        {t.getTranslation('header_projects')}
                    </a>
                    <a href="#contacts" onClick={() => setIsToggled(false)}>
                        <img src="/images/icons/contact.svg" alt="Contact" />
                        {t.getTranslation('header_contact')}
                    </a>
                    <div className='menu'>
                        <img src="/images/icons/languages.svg" alt="Languages" />
                        {t.getTranslation('header_languages')}
                        <div className='submenu'>
                            <Link to={`/en`} className='language' onClick={() => {t.changeLanguage(languages.EN); setIsToggled(false)}}>
                                <img src="/images/icons/flag/uk.svg" alt="English" />
                                {t.getTranslation('header_languages_english')}
                            </Link>
                            <Link to={`/fr`} className='language' onClick={() => {t.changeLanguage(languages.FR); setIsToggled(false)}}>
                                <img src="/images/icons/flag/fr.svg" alt="French" />
                                {t.getTranslation('header_languages_french')}
                            </Link>
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
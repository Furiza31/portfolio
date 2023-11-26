import '../styles/header.scss';
import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { debounce } from '../utils/debouce';

export const Header = () => {

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
                <h1>Hugo Wendjaneh</h1>
            </Fade>
            </a>
            <nav>
                <Fade cascade direction='up' duration={150}>
                    <h1 className='menu-title'>Menu</h1>
                    <a href="">
                        <img src="/images/icons/home.svg" alt="Home" />
                        Home
                    </a>
                    <a href="">
                        <img src="/images/icons/skills.svg" alt="Skills" />
                        Skills
                    </a>
                    <a href="">
                        <img src="/images/icons/projects.svg" alt="Projects" />
                        Projects
                    </a>
                    <a href="">
                        <img src="/images/icons/contact.svg" alt="Contact" />
                        Contact
                    </a>
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
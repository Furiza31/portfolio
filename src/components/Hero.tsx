import '../styles/hero.scss'
import { Fade } from 'react-awesome-reveal';

export const Hero = () => {
    return (
        <section className="hero">
            <div className='hero-text'>
                <Fade cascade direction='up' duration={200} className='fade'>
                    <h1>
                        Hugo Wendjaneh
                    </h1>
                    <h2>
                        Full Stack Developer
                    </h2>
                    <p>
                        Curious, motivated, and detail-oriented individual eager to acquire new knowledge. Constantly evolving, in symbiosis with new technologies.
                    </p>
                    <div className='hero-contact'>
                        <a href="https://github.com/Furiza31" target="_blank">
                            <img src="/images/icons/github.svg" alt="Github" />
                            Github
                        </a>
                        <a href="https://www.linkedin.com/in/hugo-wendjaneh-036637252/" target="_blank">
                            <img src="/images/icons/linkedin.svg" alt="Linkedin" />
                            Linkedin
                        </a>
                        <a href="mailto:hugo.wendjaneh@gmail.com">
                            <img src="/images/icons/email.svg" alt="Mail" />
                            hugo.wendjaneh@gmail.com
                        </a>
                    </div>
                </Fade>
            </div>
            <Fade cascade direction='up' duration={200} className='fade'>
                <img src="/images/me/me.png" alt="Me" className='me' />
            </Fade>
        </section>
    );
};
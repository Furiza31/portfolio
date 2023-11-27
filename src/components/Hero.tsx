import '../styles/hero.scss'
import { Fade } from 'react-awesome-reveal';
import { ContactLinks } from './contacts/ContactLinks';

export const Hero = () => {
    return (
        <section className="hero" id='home'>
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
                </Fade>
                    <div className='hero-contact'>
                        <ContactLinks />
                    </div>
            </div>
            <Fade cascade direction='up' duration={200} className='fade'>
                <img src="/images/me/me.png" alt="Me" className='me' />
            </Fade>
        </section>
    );
};
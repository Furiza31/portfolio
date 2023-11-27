import '../styles/hero.scss'
import { Fade } from 'react-awesome-reveal';
import { ContactLinks } from './contacts/ContactLinks';
import { translator } from '../services/translator';

export const Hero = () => {
    const t = translator.getInstance();

    return (
        <section className="hero" id='home'>
            <div className='hero-text'>
                <Fade cascade direction='up' duration={200} className='fade'>
                    <h1>
                        {t.getTranslation('me')}
                    </h1>
                    <h2>
                        {t.getTranslation('hero_title')}
                    </h2>
                    <p>
                        {t.getTranslation('hero_text')}
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
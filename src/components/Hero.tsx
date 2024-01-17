import '../styles/hero.scss'
import { Fade } from 'react-awesome-reveal';
import { ContactLinks } from './contacts/ContactLinks';
import { translator } from '../services/translator';
import me from '../assets/images/me/me.png';
import splash from '../assets/images/me/splash.png';

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
                <img src={me} alt="Me" className='me' style={{
                    maskImage: 'url(' + splash + ')',
                    WebkitMaskImage: 'url(' + splash + ')'
                }} />
            </Fade>
        </section>
    );
};
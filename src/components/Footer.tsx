import { translator } from '../services/translator'
import '../styles/footer.scss'

export const Footer = () => {
    const t = translator.getInstance();

    return (
        <footer>
            <p>
                {t.getTranslation('footer_text')} <span>{t.getTranslation('footer_heart')}</span>
            </p>
            <p>
                {t.getTranslation('footer_copyrigth')} <span className='dash'>{t.getTranslation('footer_dash')}</span><br /> <span className='me'> {t.getTranslation('me')} </span>
            </p>
        </footer>
    )
}
import { Fade } from 'react-awesome-reveal';
import cv from '../../assets/documents/CV.pdf';
import cvImage from '../../assets/images/icons/cv.svg';
import email from '../../assets/images/icons/email.svg';
import github from '../../assets/images/icons/github.svg';
import linkedin from '../../assets/images/icons/linkedin.svg';
import { translator } from '../../services/translator';
import '../../styles/contact/links.scss';

export const ContactLinks: React.FC = () => {
	const t = translator.getInstance();

	return (
		<Fade cascade direction="up" duration={150}>
			<a href="https://github.com/Furiza31" target="_blank" rel="noreferrer noopener" className="contact_link">
				<img src={github} alt="Github" />
				{t.getTranslation('contact_link_github')}
			</a>
			<a
				href="https://www.linkedin.com/in/hugo-wendjaneh-036637252/"
				target="_blank"
				rel="noreferrer noopener"
				className="contact_link"
			>
				<img src={linkedin} alt="Linkedin" />
				{t.getTranslation('contact_link_linkedin')}
			</a>
			<a href="mailto:hugo.wendjaneh@gmail.com" className="contact_link">
				<img src={email} alt="E-Mail" />
				{t.getTranslation('contact_link_email')}
			</a>
			<a href={cv} className="contact_link" target="_blank" rel="noreferrer noopener">
				<img src={cvImage} alt="CV" />
				{t.getTranslation('contact_link_cv')}
			</a>
		</Fade>
	);
};

import { Fade } from 'react-awesome-reveal';
import openext from '../../assets/images/icons/open-external.svg';
import { translator } from '../../services/translator';
import '../../styles/projects/project.scss';
import { ProjectType } from '../../types/ProjectType';
import { Technology } from './Technology';

export const Project: React.FC<ProjectType> = ({ titleKey, textKey, url, technologies }: ProjectType) => {
	const t = translator.getInstance();
	return (
		<a href={url} target="_blank" className="project">
			<Fade cascade direction="up" duration={150}>
				<div className="content">
					<h1>
						{t.getTranslation(titleKey)} <img src={openext} alt="Open external" />
					</h1>
					<p>{t.getTranslation(textKey)}</p>
				</div>
			</Fade>
			<div className="technologies">
				<Fade cascade direction="up" duration={150}>
					{technologies.map((tech) => (
						<Technology key={tech.name} {...tech} />
					))}
				</Fade>
			</div>
		</a>
	);
};

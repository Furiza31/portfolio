import { Fade } from 'react-awesome-reveal';
import openext from '../../assets/images/icons/open-external.svg';
import { translator } from '../../services/translator';
import '../../styles/projects/project.scss';
import { ProjectType } from '../../types/ProjectType';
import { Technology } from './Technology';

export const Project: React.FC<{ project: ProjectType }> = ({ project }: { project: ProjectType }) => {
	const t = translator.getInstance();
	return (
		<a href={project.url} target="_blank" className="project" rel="noreferrer noopener">
			<Fade cascade direction="up" duration={150}>
				<div className="content">
					<h1>
						{t.getTranslation(project.titleKey)} <img src={openext} alt="Open external" />
					</h1>
					<p>{t.getTranslation(project.textKey)}</p>
				</div>
			</Fade>
			<div className="technologies">
				<Fade cascade direction="up" duration={150}>
					{project.technologies.map((tech) => (
						<Technology key={tech.name} technology={tech} />
					))}
				</Fade>
			</div>
		</a>
	);
};

import { projectsData } from '../data/projectsData';
import { translator } from '../services/translator';
import '../styles/projects.scss';
import { Project } from './projects/Project';

export const Projects: React.FC = () => {
	const t = translator.getInstance();

	return (
		<section className="projects" id="projects">
			<fieldset>
				<legend>{t.getTranslation('header_projects')}</legend>
				{projectsData.map((project) => (
					<Project key={project.titleKey} project={project} />
				))}
			</fieldset>
		</section>
	);
};

import { Fade } from 'react-awesome-reveal';
import openext from '../assets/images/icons/open-external.svg';
import mysql from '../assets/images/icons/skills/databases/mysql.svg';
import postgresql from '../assets/images/icons/skills/databases/postgresql.svg';
import angular from '../assets/images/icons/skills/programming/angular.svg';
import csharp from '../assets/images/icons/skills/programming/csharp.svg';
import dotnet from '../assets/images/icons/skills/programming/dotnet.svg';
import java from '../assets/images/icons/skills/programming/java.svg';
import nodejs from '../assets/images/icons/skills/programming/nodejs.svg';
import php from '../assets/images/icons/skills/programming/php.svg';
import python from '../assets/images/icons/skills/programming/python.svg';
import react from '../assets/images/icons/skills/programming/react.svg';
import api from '../assets/images/icons/skills/systemAndNetwork/api.svg';
import docker from '../assets/images/icons/skills/systemAndNetwork/docker.svg';
import { translator } from '../services/translator';
import '../styles/projects.scss';

export const Projects: React.FC = () => {
	const t = translator.getInstance();

	return (
		<section className="projects" id="projects">
			<fieldset>
				<legend>{t.getTranslation('header_projects')}</legend>
				<a href="https://github.com/EuroguessrTeam/Euroguessr/" target="_blank" className="project">
					<Fade cascade direction="up" duration={150}>
						<div className="content">
							<h1>
								{t.getTranslation('projects_euroguessr_title')} <img src={openext} alt="Open external" />
							</h1>
							<p>{t.getTranslation('projects_euroguessr_text')}</p>
						</div>
					</Fade>
					<div className="technologies">
						<Fade cascade direction="up" duration={150}>
							<div className="technology">
								<img src={csharp} alt="C#" />
								<p>{t.getTranslation('skills_programming_csharp')}</p>
							</div>
							<div className="technology">
								<img src={react} alt="React" />
								<p>{t.getTranslation('skills_programming_react')}</p>
							</div>
							<div className="technology">
								<img src={dotnet} alt="Dot Net" />
								<p>{t.getTranslation('skills_programming_dotnet')}</p>
							</div>
							<div className="technology">
								<img src={docker} alt="Docker" />
								<p>{t.getTranslation('skills_systemAndNetwork_docker')}</p>
							</div>
							<div className="technology">
								<img src={postgresql} alt="PostgreSQL" />
								<p>{t.getTranslation('skills_databases_postgresql')}</p>
							</div>
						</Fade>
					</div>
				</a>
				<a href="https://github.com/IUT-Blagnac/sae3-01-devapp-g2a-7" target="_blank" className="project">
					<Fade cascade direction="up" duration={150}>
						<div className="content">
							<h1>
								{t.getTranslation('projects_revive_title')} <img src={openext} alt="Open external" />
							</h1>
							<p>{t.getTranslation('projects_revive_text')}</p>
						</div>
					</Fade>
					<div className="technologies">
						<Fade cascade direction="up" duration={150}>
							<div className="technology">
								<img src={php} alt="PHP" />
								<p>{t.getTranslation('skills_programming_php')}</p>
							</div>
							<div className="technology">
								<img src={java} alt="Java" />
								<p>{t.getTranslation('skills_programming_java')}</p>
							</div>
							<div className="technology">
								<img src={python} alt="Python" />
								<p>{t.getTranslation('skills_programming_python')}</p>
							</div>
							<div className="technology">
								<img src={mysql} alt="MySQL" />
								<p>{t.getTranslation('skills_databases_mysql')}</p>
							</div>
						</Fade>
					</div>
				</a>
				<a href="https://github.com/IUT-Blagnac/sae2022-bank-1b03/" target="_blank" className="project">
					<Fade cascade direction="up" duration={150}>
						<div className="content">
							<h1>
								{t.getTranslation('projects_dailyBank_title')} <img src={openext} alt="Open external" />
							</h1>
							<p>{t.getTranslation('projects_dailyBank_text')}</p>
						</div>
					</Fade>
					<div className="technologies">
						<Fade cascade direction="up" duration={150}>
							<div className="technology">
								<img src={java} alt="Java" />
								<p>{t.getTranslation('skills_programming_java')}</p>
							</div>
							<div className="technology">
								<img src={mysql} alt="MySQL" />
								<p>{t.getTranslation('skills_databases_mysql')}</p>
							</div>
						</Fade>
					</div>
				</a>
				<a href="https://github.com/Furiza31/Camellia-Discord-bot" target="_blank" className="project">
					<Fade cascade direction="up" duration={150}>
						<div className="content">
							<h1>
								{t.getTranslation('projects_camellia_title')} <img src={openext} alt="Open external" />
							</h1>
							<p>{t.getTranslation('projects_camellia_text')}</p>
						</div>
					</Fade>
					<div className="technologies">
						<Fade cascade direction="up" duration={150}>
							<div className="technology">
								<img src={nodejs} alt="NodeJS" />
								<p>{t.getTranslation('skills_programming_nodejs')}</p>
							</div>
						</Fade>
					</div>
				</a>
				<a href="https://github.com/Furiza31/CompWeb-Projet-Tarot-Angular" target="_blank" className="project">
					<Fade cascade direction="up" duration={150}>
						<div className="content">
							<h1>
								{t.getTranslation('projects_tarot_title')} <img src={openext} alt="Open external" />
							</h1>
							<p>{t.getTranslation('projects_tarot_text')}</p>
						</div>
					</Fade>
					<div className="technologies">
						<Fade cascade direction="up" duration={150}>
							<div className="technology">
								<img src={angular} alt="Angular" />
								<p>{t.getTranslation('skills_programming_angular')}</p>
							</div>
							<div className="technology">
								<img src={api} alt="API" />
								<p>{t.getTranslation('skills_systemAndNetwork_api')}</p>
							</div>
						</Fade>
					</div>
				</a>
			</fieldset>
		</section>
	);
};

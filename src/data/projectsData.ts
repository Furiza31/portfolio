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
import { ProjectType } from '../types/ProjectType';

export const projectsData: ProjectType[] = [
	{
		titleKey: 'projects_euroguessr_title',
		textKey: 'projects_euroguessr_text',
		url: 'https://github.com/EuroguessrTeam/Euroguessr/',
		technologies: [
			{ name: 'skills_programming_csharp', image: csharp },
			{ name: 'skills_programming_react', image: react },
			{ name: 'skills_programming_dotnet', image: dotnet },
			{ name: 'skills_systemAndNetwork_docker', image: docker },
			{ name: 'skills_databases_postgresql', image: postgresql },
		],
	},
	{
		titleKey: 'projects_revive_title',
		textKey: 'projects_revive_text',
		url: 'https://github.com/IUT-Blagnac/sae3-01-devapp-g2a-7',
		technologies: [
			{ name: 'skills_programming_php', image: php },
			{ name: 'skills_programming_java', image: java },
			{ name: 'skills_programming_python', image: python },
			{ name: 'skills_databases_mysql', image: mysql },
		],
	},
	{
		titleKey: 'projects_dailyBank_title',
		textKey: 'projects_dailyBank_text',
		url: 'https://github.com/IUT-Blagnac/sae2022-bank-1b03/',
		technologies: [
			{ name: 'skills_programming_java', image: java },
			{ name: 'skills_databases_mysql', image: mysql },
		],
	},
	{
		titleKey: 'projects_camellia_title',
		textKey: 'projects_camellia_text',
		url: 'https://github.com/Furiza31/Camellia-Discord-bot',
		technologies: [{ name: 'skills_programming_nodejs', image: nodejs }],
	},
	{
		titleKey: 'projects_tarot_title',
		textKey: 'projects_tarot_text',
		url: 'https://github.com/Furiza31/CompWeb-Projet-Tarot-Angular',
		technologies: [
			{ name: 'skills_programming_angular', image: angular },
			{ name: 'skills_systemAndNetwork_api', image: api },
		],
	},
];

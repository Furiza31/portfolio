import amazonaws from '../assets/images/icons/skills/databases/amazonaws.svg';
import mysql from '../assets/images/icons/skills/databases/mysql.svg';
import oracle from '../assets/images/icons/skills/databases/oracle.svg';
import postgresql from '../assets/images/icons/skills/databases/postgresql.svg';
import prisma from '../assets/images/icons/skills/databases/prisma.svg';
import angular from '../assets/images/icons/skills/programming/angular.svg';
import bash from '../assets/images/icons/skills/programming/bash.svg';
import git from '../assets/images/icons/skills/programming/git.svg';
import java from '../assets/images/icons/skills/programming/java.svg';
import nodejs from '../assets/images/icons/skills/programming/nodejs.svg';
import python from '../assets/images/icons/skills/programming/python.svg';
import react from '../assets/images/icons/skills/programming/react.svg';
import svelte from '../assets/images/icons/skills/programming/svelte.svg';
import symfony from '../assets/images/icons/skills/programming/symfony.svg';
import vuejs from '../assets/images/icons/skills/programming/vuejs.svg';
import asciidoc from '../assets/images/icons/skills/projectManagement/asciidoc.svg';
import clickup from '../assets/images/icons/skills/projectManagement/clickup.svg';
import figma from '../assets/images/icons/skills/projectManagement/figma.svg';
import ganttproject from '../assets/images/icons/skills/projectManagement/ganttproject.svg';
import github from '../assets/images/icons/skills/projectManagement/github.svg';
import googlesuite from '../assets/images/icons/skills/projectManagement/googlesuite.svg';
import api from '../assets/images/icons/skills/systemAndNetwork/api.svg';
import docker from '../assets/images/icons/skills/systemAndNetwork/docker.svg';
import sshserver from '../assets/images/icons/skills/systemAndNetwork/sshserver.svg';
import unix from '../assets/images/icons/skills/systemAndNetwork/unix.svg';
import webserver from '../assets/images/icons/skills/systemAndNetwork/webserver.svg';
import { SkillsDataType } from '../types/SkillsDataType';

export const skillsData = [
	{
		category: 'skills_programming',
		items: [
			{ name: 'VueJS', image: vuejs, translationKey: 'skills_programming_vuejs' },
			{ name: 'Angular', image: angular, translationKey: 'skills_programming_angular' },
			{ name: 'React', image: react, translationKey: 'skills_programming_react' },
			{ name: 'Svelte', image: svelte, translationKey: 'skills_programming_svelte' },
			{ name: 'Symfony', image: symfony, translationKey: 'skills_programming_phpSymfony' },
			{ name: 'Java', image: java, translationKey: 'skills_programming_java' },
			{ name: 'Python', image: python, translationKey: 'skills_programming_python' },
			{ name: 'NodeJS', image: nodejs, translationKey: 'skills_programming_nodejs' },
			{ name: 'Bash', image: bash, translationKey: 'skills_programming_bash' },
			{ name: 'Git', image: git, translationKey: 'skills_programming_git' },
		],
	},
	{
		category: 'skills_databases',
		items: [
			{ name: 'Mysql', image: mysql, translationKey: 'skills_databases_mysql' },
			{ name: 'PostgreSQL', image: postgresql, translationKey: 'skills_databases_postgresql' },
			{ name: 'Oracle', image: oracle, translationKey: 'skills_databases_oracle' },
			{ name: 'Prisma', image: prisma, translationKey: 'skills_databases_prisma' },
			{ name: 'Amazon AWS', image: amazonaws, translationKey: 'skills_databases_amazons3' },
		],
	},
	{
		category: 'skills_systemAndNetwork',
		items: [
			{ name: 'Unix', image: unix, translationKey: 'skills_systemAndNetwork_unix' },
			{ name: 'Docker', image: docker, translationKey: 'skills_systemAndNetwork_docker' },
			{ name: 'Web server', image: webserver, translationKey: 'skills_systemAndNetwork_webServer' },
			{ name: 'SSH server', image: sshserver, translationKey: 'skills_systemAndNetwork_sshServer' },
			{ name: 'API', image: api, translationKey: 'skills_systemAndNetwork_api' },
		],
	},
	{
		category: 'skills_projectManagement',
		items: [
			{ name: 'Figma', image: figma, translationKey: 'skills_projectManagement_figma' },
			{ name: 'Github', image: github, translationKey: 'skills_projectManagement_github' },
			{ name: 'Gantt Project', image: ganttproject, translationKey: 'skills_projectManagement_ganttProject' },
			{ name: 'Google suite', image: googlesuite, translationKey: 'skills_projectManagement_googleSuite' },
			{ name: 'Asciidoc', image: asciidoc, translationKey: 'skills_projectManagement_asciidoc' },
			{ name: 'ClickUp', image: clickup, translationKey: 'skills_projectManagement_clickup' },
		],
	},
] as SkillsDataType[];

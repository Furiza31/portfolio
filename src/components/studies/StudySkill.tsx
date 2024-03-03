import React from 'react';
import { Fade } from 'react-awesome-reveal';
import openext from '../../assets/images/icons/open-external.svg';
import { translator } from '../../services/translator';
import '../../styles/studies/studySkill.scss';
import { StudiesSkillType } from '../../types/studiesDataType';

export const StudySkill: React.FC<{ skill: StudiesSkillType }> = ({ skill }: { skill: StudiesSkillType }) => {
	const t = translator.getInstance();
	return (
		<Fade cascade direction="up" duration={200} className="fade">
			<a className="study_skill" target="_blank" rel="noreferrer noopener" href={skill.link}>
				<div className="study_skill_title">
					<h3>
						{t.getTranslation(skill.title)} <img src={openext} alt="Open external" />
					</h3>
					<p>{t.getTranslation(skill.description)}</p>
				</div>
				<div>
					{skill.associatedProjects.map((project, projectIndex) => (
						<p key={projectIndex}>{t.getTranslation(project.title)}</p>
					))}
				</div>
			</a>
		</Fade>
	);
};

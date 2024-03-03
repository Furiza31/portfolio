import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { translator } from '../../services/translator';
import '../../styles/studies/studyYear.scss';
import { StudiesYearType } from '../../types/studiesDataType';
import { StudySkill } from './StudySkill';

export const StudyYear: React.FC<{ year: StudiesYearType }> = ({ year }: { year: StudiesYearType }) => {
	const t = translator.getInstance();
	return (
		<li className="studyYear">
			<Fade direction="up" cascade duration={200} className="fade">
				<h2>{t.getTranslation(year.year)}</h2>
				<p>
					{year.start} - {year.end}
				</p>
			</Fade>
			<div className="study_skills">
				{year.skills.map((skill, skillIndex) => (
					<StudySkill key={skillIndex} skill={skill} />
				))}
			</div>
		</li>
	);
};

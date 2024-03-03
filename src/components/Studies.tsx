import React from 'react';
import openext from '../assets/images/icons/open-external.svg';
import { studiesData } from '../data/studiesData';
import { translator } from '../services/translator';
import '../styles/studies.scss';
import { StudyYear } from './studies/StudyYear';

export const Studies: React.FC = () => {
	const t = translator.getInstance();
	return (
		<section className="studies" id="studies">
			<fieldset>
				<legend>{t.getTranslation('header_studies')}</legend>
				{studiesData.map((study, studyIndex) => (
					<div key={studyIndex} className="study">
						<a href={study.place} target="_blank" rel="noreferrer noopener" className="study_school">
							<img src={openext} alt="Open external" />
							{t.getTranslation(study.title)}
						</a>
						<p>{study.date}</p>
						<ul>
							{study.years.map((year, yearIndex) => (
								<StudyYear key={yearIndex} year={year} />
							))}
						</ul>
					</div>
				))}
			</fieldset>
		</section>
	);
};

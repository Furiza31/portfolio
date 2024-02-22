import { skillsData } from '../data/skillsData';
import { translator } from '../services/translator';
import '../styles/skills.scss';
import { SkillsType } from '../types/SkillsType';
import { SkillCategory } from './Skills/SkillCategory';

export const Skills: React.FC = () => {
	const t = translator.getInstance();

	return (
		<section className="skills" id="skills">
			<fieldset>
				<legend>{t.getTranslation('header_skills')}</legend>
				{skillsData.map((category: SkillsType) => (
					<SkillCategory key={category.category} {...category} />
				))}
			</fieldset>
		</section>
	);
};

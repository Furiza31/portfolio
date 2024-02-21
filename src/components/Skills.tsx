import { skillsData } from '../data/skillsDatas';
import { translator } from '../services/translator';
import '../styles/skills.scss';
import { SkillsDataType } from '../types/SkillsDataType';
import { SkillCategory } from './Skills/SkillCategory';

export const Skills: React.FC = () => {
	const t = translator.getInstance();

	return (
		<section className="skills" id="skills">
			<fieldset>
				<legend>{t.getTranslation('header_skills')}</legend>
				{skillsData.map((category: SkillsDataType) => (
					<SkillCategory key={category.category} {...category} />
				))}
			</fieldset>
		</section>
	);
};

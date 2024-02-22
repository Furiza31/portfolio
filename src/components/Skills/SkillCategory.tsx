import { Fade } from 'react-awesome-reveal';
import { translator } from '../../services/translator';
import '../../styles/skills/skillCategory.scss';
import { SkillsType } from '../../types/SkillsType';
import { SkillItem } from './SkillItem';

export const SkillCategory: React.FC<SkillsType> = ({ category, items }: SkillsType) => {
	const t = translator.getInstance();

	return (
		<div className="skill">
			<h1>{t.getTranslation(category)}</h1>
			<Fade cascade direction="up" duration={500 / items.length}>
				{items.map((item) => (
					<SkillItem key={item.name} {...item} />
				))}
			</Fade>
		</div>
	);
};

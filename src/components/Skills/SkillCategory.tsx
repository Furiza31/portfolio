import { Fade } from 'react-awesome-reveal';
import { translator } from '../../services/translator';
import '../../styles/skills/skillCategory.scss';
import { SkillsType } from '../../types/SkillsType';
import { SkillItem } from './SkillItem';

export const SkillCategory: React.FC<{ category: SkillsType }> = ({ category }: { category: SkillsType }) => {
	const t = translator.getInstance();

	return (
		<div className="skill">
			<h1>{t.getTranslation(category.category)}</h1>
			<Fade cascade direction="up" duration={500 / category.items.length}>
				{category.items.map((item) => (
					<SkillItem key={item.name} item={item} />
				))}
			</Fade>
		</div>
	);
};

import { Fade } from 'react-awesome-reveal';
import { translator } from '../../services/translator';
import '../../styles/skills/skillCategory.scss';
import { SkillsDataType } from '../../types/SkillsDataType';
import { SkillsItemType } from '../../types/SkillsItemType';
import { SkillItem } from './SkillItem';

export const SkillCategory: React.FC<SkillsDataType> = ({
	category,
	items,
}: {
	category: string;
	items: SkillsItemType[];
}) => {
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

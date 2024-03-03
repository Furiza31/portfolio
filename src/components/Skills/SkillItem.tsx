import { translator } from '../../services/translator';
import '../../styles/skills/skillItem.scss';
import { SkillsItemType } from '../../types/SkillsItemType';

export const SkillItem: React.FC<{ item: SkillsItemType }> = ({ item }: { item: SkillsItemType }) => {
	const t = translator.getInstance();
	return (
		<div className="skillItem">
			<img src={item.image} alt={item.name} />
			<p>{t.getTranslation(item.translationKey)}</p>
		</div>
	);
};

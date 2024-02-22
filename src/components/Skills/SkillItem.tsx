import { translator } from '../../services/translator';
import '../../styles/skills/skillItem.scss';
import { SkillsItemType } from '../../types/SkillsItemType';

export const SkillItem: React.FC<SkillsItemType> = ({ name, image, translationKey }: SkillsItemType) => {
	const t = translator.getInstance();
	return (
		<div className="skillItem">
			<img src={image} alt={name} />
			<p>{t.getTranslation(translationKey)}</p>
		</div>
	);
};

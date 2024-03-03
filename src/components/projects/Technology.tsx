import React from 'react';
import { translator } from '../../services/translator';
import '../../styles/projects/technology.scss';
import { TechnologyType } from '../../types/TechnologyType';

export const Technology: React.FC<{ technology: TechnologyType }> = ({
	technology,
}: {
	technology: TechnologyType;
}) => {
	const t = translator.getInstance();
	return (
		<div className="technology">
			<img src={technology.image} alt={t.getTranslation(technology.name)} />
			<p>{t.getTranslation(technology.name)}</p>
		</div>
	);
};

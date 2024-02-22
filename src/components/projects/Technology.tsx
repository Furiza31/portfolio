import React from 'react';
import { translator } from '../../services/translator';
import '../../styles/projects/technology.scss';
import { TechnologyType } from '../../types/TechnologyType';

export const Technology: React.FC<TechnologyType> = ({ name, image }: TechnologyType) => {
	const t = translator.getInstance();
	return (
		<div className="technology">
			<img src={image} alt={t.getTranslation(name)} />
			<p>{t.getTranslation(name)}</p>
		</div>
	);
};

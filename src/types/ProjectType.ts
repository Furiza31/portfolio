import { TechnologyType } from './TechnologyType';

export interface ProjectType {
	titleKey: string;
	textKey: string;
	url: string;
	technologies: TechnologyType[];
}

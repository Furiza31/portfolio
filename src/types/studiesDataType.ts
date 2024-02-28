export interface StudiesProjectType {
    title: string;
}

export interface StudiesSkillType {
    title: string;
    description: string;
    associatedProjects: StudiesProjectType[];
}

export interface StudiesYearType {
    year: string;
    start: string;
    end: string;
    skills: StudiesSkillType[];
}

export interface StudiesDataType {
    title: string;
    date: string;
    years: StudiesYearType[];
}
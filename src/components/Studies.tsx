import { translator } from '../services/translator';
import '../styles/studies.scss';
import { studiesData } from '../data/studiesData';

export const Studies: React.FC = () => {
    const t = translator.getInstance();

    return (
        <section className="studies" id="studies">
            <fieldset>
                <legend>{t.getTranslation('header_studies')}</legend>
                {studiesData.map((study, index) => {
                    return (
                        <div key={index} className="study">
                            <h1>{t.getTranslation(study.title)}</h1>
                            <p>{study.date}</p>
                            {study.years.map((year, index) => {
                                return (
                                    <div key={index}>
                                        <h3>{year.year}</h3>
                                        <p>
                                            {year.start} - {year.end}
                                        </p>
                                        {year.skills.map((skill, index) => {
                                            return (
                                                <div key={index}>
                                                    <h4>{t.getTranslation(skill.title)}</h4>
                                                    <p>{t.getTranslation(skill.description)}</p>
                                                    <div>
                                                        {skill.associatedProjects.map((project, index) => {
                                                            return (
                                                                <p key={index}>{t.getTranslation(project.title)}</p>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </fieldset>
        </section>
    );
};

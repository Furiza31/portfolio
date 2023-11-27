import { translator } from '../services/translator'
import '../styles/projects.scss'
import { Fade } from 'react-awesome-reveal'

export const Projects = () => {
    const t = translator.getInstance();

    return (
        <section className="projects" id='projects'>
            <fieldset>
                <legend>{t.getTranslation('header_projects')}</legend>
                <a href="https://github.com/EuroguessrTeam/Euroguessr/" target="_blank" className='project'>
                    <Fade cascade direction='up' duration={150}>
                        <div className='content'>
                            <h1>{t.getTranslation('projects_euroguessr_title')} <img src="/images/icons/open-external.svg" alt="Open external" /></h1>
                            <p>{t.getTranslation('projects_euroguessr_text')}</p>
                        </div>
                    </Fade>
                    <div className='technologies'>
                        <Fade cascade direction='up' duration={150}>
                            <div className='technology'>
                                <img src="/images/icons/skills/programming/csharp.svg" alt="C#" />
                                <p>{t.getTranslation('skills_programming_csharp')}</p>
                            </div>
                            <div className='technology'>
                                <img src="/images/icons/skills/programming/react.svg" alt="React" />
                                <p>{t.getTranslation('skills_programming_react')}</p>
                            </div>
                            <div className='technology'>
                                <img src="/images/icons/skills/programming/dotnet.svg" alt="Dot Net" />
                                <p>{t.getTranslation('skills_programming_dotnet')}</p>
                            </div>
                            <div className='technology'>
                                <img src="/images/icons/skills/systemAndNetwork/docker.svg" alt="Docker" />
                                <p>{t.getTranslation('skills_systemAndNetwork_docker')}</p>
                            </div>
                            <div className='technology'>
                                <img src="/images/icons/skills/databases/postgresql.svg" alt="PostgreSQL" />
                                <p>{t.getTranslation('skills_databases_postgresql')}</p>
                            </div>
                        </Fade>
                    </div>
                </a>
                <a href="https://github.com/IUT-Blagnac/sae3-01-devapp-g2a-7" target="_blank" className='project'>
                    <Fade cascade direction='up' duration={150}>
                        <div className='content'>
                            <h1>{t.getTranslation('projects_revive_title')} <img src="/images/icons/open-external.svg" alt="Open external" /></h1>
                            <p>
                                {t.getTranslation('projects_revive_text')}
                            </p>
                        </div>
                    </Fade>
                    <div className='technologies'>
                        <Fade cascade direction='up' duration={150}>
                            <div className='technology'>
                                <img src="/images/icons/skills/programming/php.svg" alt="PHP" />
                                <p>{t.getTranslation('skills_programming_php')}</p>
                            </div>
                            <div className='technology'>
                                <img src="/images/icons/skills/programming/java.svg" alt="Java" />
                                <p>{t.getTranslation('skills_programming_java')}</p>
                            </div>
                            <div className='technology'>
                                <img src="/images/icons/skills/programming/python.svg" alt="Python" />
                                <p>{t.getTranslation('skills_programming_python')}</p>
                            </div>
                            <div className='technology'>
                                <img src="/images/icons/skills/databases/mysql.svg" alt="MySQL" />
                                <p>{t.getTranslation('skills_databases_mysql')}</p>
                            </div>
                        </Fade>
                    </div>
                </a>
                <a href="https://github.com/IUT-Blagnac/sae2022-bank-1b03/" target="_blank" className='project'>
                    <Fade cascade direction='up' duration={150}>
                        <div className='content'>
                            <h1>{t.getTranslation('projects_dailyBank_title')} <img src="/images/icons/open-external.svg" alt="Open external" /></h1>
                            <p>{t.getTranslation('projects_dailyBank_text')}</p>
                        </div>
                    </Fade>
                    <div className='technologies'>
                        <Fade cascade direction='up' duration={150}>
                            <div className='technology'>
                                <img src="/images/icons/skills/programming/java.svg" alt="Java" />
                                <p>{t.getTranslation('skills_programming_java')}</p>
                            </div>
                            <div className='technology'>
                                <img src="/images/icons/skills/databases/mysql.svg" alt="MySQL" />
                                <p>{t.getTranslation('skills_databases_mysql')}</p>
                            </div>
                        </Fade>
                    </div>
                </a>
                <a href="https://github.com/Furiza31/Camellia-Discord-bot" target="_blank" className='project'>
                    <Fade cascade direction='up' duration={150}>
                        <div className='content'>
                            <h1>{t.getTranslation('projects_camellia_title')} <img src="/images/icons/open-external.svg" alt="Open external" /></h1>
                            <p>{t.getTranslation('projects_camellia_text')}</p>
                        </div>
                    </Fade>
                    <div className='technologies'>
                        <Fade cascade direction='up' duration={150}>
                            <div className='technology'>
                                <img src="/images/icons/skills/programming/nodejs.svg" alt="NodeJS" />
                                <p>{t.getTranslation('skills_programming_nodejs')}</p>
                            </div>
                        </Fade>
                    </div>
                </a>
                <a href="https://github.com/EuroguessrTeam/Euroguessr/" target="_blank" className='project'>
                    <Fade cascade direction='up' duration={150}>
                        <div className='content'>
                            <h1>{t.getTranslation('projects_tarot_title')} <img src="/images/icons/open-external.svg" alt="Open external" /></h1>
                            <p>{t.getTranslation('projects_tarot_text')}</p>
                        </div>
                    </Fade>
                    <div className='technologies'>
                        <Fade cascade direction='up' duration={150}>
                            <div className='technology'>
                                <img src="/images/icons/skills/programming/angular.svg" alt="Angular" />
                                <p>{t.getTranslation('skills_programming_angular')}</p>
                            </div>
                            <div className='technology'>
                                <img src="/images/icons/skills/systemAndNetwork/api.svg" alt="API" />
                                <p>{t.getTranslation('skills_systemAndNetwork_api')}</p>
                            </div>
                        </Fade>
                    </div>
                </a>
            </fieldset>
        </section>
    )
}
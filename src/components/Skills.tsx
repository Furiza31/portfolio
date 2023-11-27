import { translator } from '../services/translator';
import '../styles/skills.scss'
import { Fade } from 'react-awesome-reveal';

export const Skills = () => {
    const t = translator.getInstance();

    return (
        <section className="skills" id='skills'>
            <fieldset>
                <legend>{t.getTranslation('header_skills')}</legend>
                    <div className='skill'>
                        <h1>{t.getTranslation('skills_programming')}</h1>
                        <Fade cascade direction='up' duration={75}>
                            <div>
                                <img src='/images/icons/skills/programming/vuejs.svg' alt='VueJS' />
                                <p>{t.getTranslation('skills_programming_vuejs')}</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/programming/angular.svg' alt='Angular' />
                                <p>{t.getTranslation('skills_programming_angular')}</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/programming/react.svg' alt='React' />
                                <p>{t.getTranslation('skills_programming_react')}</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/programming/svelte.svg' alt='Svelte' />
                                <p>{t.getTranslation('skills_programming_svelte')}</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/programming/symfony.svg' alt='Symfony' />
                                <p>{t.getTranslation('skills_programming_phpSymfony')}</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/programming/java.svg' alt='Java' />
                                <p>{t.getTranslation('skills_programming_java')}</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/programming/python.svg' alt='Python' />
                                <p>{t.getTranslation('skills_programming_python')}</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/programming/nodejs.svg' alt='NodeJS' />
                                <p>{t.getTranslation('skills_programming_nodejs')}</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/programming/bash.svg' alt='Bash' />
                                <p>{t.getTranslation('skills_programming_bash')}</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/programming/git.svg' alt='Git' />
                                <p>{t.getTranslation('skills_programming_git')}</p>
                            </div>
                        </Fade>
                    </div>
                    <div className='skill'>
                        <h1>{t.getTranslation('skills_databases')}</h1>
                        <Fade cascade direction='up' duration={150}>
                            <div>
                                <img src='/images/icons/skills/databases/mysql.svg' alt='Mysql' />
                                <p>{t.getTranslation('skills_databases_mysql')}</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/databases/postgresql.svg' alt='PostgreSQL' />
                                <p>{t.getTranslation('skills_databases_postgresql')}</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/databases/oracle.svg' alt='Oracle' />
                                <p>{t.getTranslation('skills_databases_oracle')}</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/databases/prisma.svg' alt='Prisma' />
                                <p>{t.getTranslation('skills_databases_prisma')}</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/databases/amazonaws.svg' alt='Amazon AWS' />
                                <p>{t.getTranslation('skills_databases_amazons3')}</p>
                            </div>
                        </Fade>
                    </div>
                    <div className='skill'>  
                        <h1>{t.getTranslation('skills_systemAndNetwork')}</h1>
                        <Fade cascade direction='up' duration={150}>
                            <div>
                                <img src='/images/icons/skills/systemAndNetwork/unix.svg' alt='Unix' />
                                <p>{t.getTranslation('skills_systemAndNetwork_unix')}</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/systemAndNetwork/docker.svg' alt='Docker' />
                                <p>{t.getTranslation('skills_systemAndNetwork_docker')}</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/systemAndNetwork/webserver.svg' alt='Web server' />
                                <p>{t.getTranslation('skills_systemAndNetwork_webServer')}</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/systemAndNetwork/sshserver.svg' alt='SSH server' />
                                <p>{t.getTranslation('skills_systemAndNetwork_sshServer')}</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/systemAndNetwork/api.svg' alt='API' />
                                <p>{t.getTranslation('skills_systemAndNetwork_api')}</p>
                            </div>
                        </Fade>
                    </div>
                    <div className='skill'>
                        <h1>{t.getTranslation('skills_projectManagement')}</h1>
                        <Fade cascade direction='up' duration={150}>
                            <div>
                                <img src='/images/icons/skills/projectManagement/figma.svg' alt='Figma' />
                                <p>{t.getTranslation('skills_projectManagement_figma')}</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/projectManagement/github.svg' alt='Github' />
                                <p>{t.getTranslation('skills_projectManagement_github')}</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/projectManagement/ganttproject.svg' alt='Gantt Project' />
                                <p>{t.getTranslation('skills_projectManagement_ganttProject')}</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/projectManagement/googlesuite.svg' alt='Google suite' />
                                <p>{t.getTranslation('skills_projectManagement_googleSuite')}</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/projectManagement/asciidoc.svg' alt='Asciidoc' />
                                <p>{t.getTranslation('skills_projectManagement_asciidoc')}</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/projectManagement/clickup.svg' alt='ClickUp' />
                                <p>{t.getTranslation('skills_projectManagement_clickup')}</p>
                            </div>
                        </Fade>
                    </div>
            </fieldset>
        </section>
    )
}
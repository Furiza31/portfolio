import { translator } from '../services/translator';
import '../styles/skills.scss'
import { Fade } from 'react-awesome-reveal';
import vuejs from '../assets/images/icons/skills/programming/vuejs.svg';
import angular from '../assets/images/icons/skills/programming/angular.svg';
import react from '../assets/images/icons/skills/programming/react.svg';
import svelte from '../assets/images/icons/skills/programming/svelte.svg';
import symfony from '../assets/images/icons/skills/programming/symfony.svg';
import java from '../assets/images/icons/skills/programming/java.svg';
import python from '../assets/images/icons/skills/programming/python.svg';
import nodejs from '../assets/images/icons/skills/programming/nodejs.svg';
import bash from '../assets/images/icons/skills/programming/bash.svg';
import git from '../assets/images/icons/skills/programming/git.svg';
import mysql from '../assets/images/icons/skills/databases/mysql.svg';
import postgresql from '../assets/images/icons/skills/databases/postgresql.svg';
import oracle from '../assets/images/icons/skills/databases/oracle.svg';
import prisma from '../assets/images/icons/skills/databases/prisma.svg';
import amazonaws from '../assets/images/icons/skills/databases/amazonaws.svg';
import unix from '../assets/images/icons/skills/systemAndNetwork/unix.svg';
import docker from '../assets/images/icons/skills/systemAndNetwork/docker.svg';
import webserver from '../assets/images/icons/skills/systemAndNetwork/webserver.svg';
import sshserver from '../assets/images/icons/skills/systemAndNetwork/sshserver.svg';
import api from '../assets/images/icons/skills/systemAndNetwork/api.svg';
import figma from '../assets/images/icons/skills/projectManagement/figma.svg';
import github from '../assets/images/icons/skills/projectManagement/github.svg';
import ganttproject from '../assets/images/icons/skills/projectManagement/ganttproject.svg';
import googlesuite from '../assets/images/icons/skills/projectManagement/googlesuite.svg';
import asciidoc from '../assets/images/icons/skills/projectManagement/asciidoc.svg';
import clickup from '../assets/images/icons/skills/projectManagement/clickup.svg';

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
                                <img src={vuejs} alt='VueJS' />
                                <p>{t.getTranslation('skills_programming_vuejs')}</p>
                            </div>
                            <div>
                                <img src={angular} alt='Angular' />
                                <p>{t.getTranslation('skills_programming_angular')}</p>
                            </div>
                            <div>
                                <img src={react} alt='React' />
                                <p>{t.getTranslation('skills_programming_react')}</p>
                            </div>
                            <div>
                                <img src={svelte} alt='Svelte' />
                                <p>{t.getTranslation('skills_programming_svelte')}</p>
                            </div>
                            <div>
                                <img src={symfony} alt='Symfony' />
                                <p>{t.getTranslation('skills_programming_phpSymfony')}</p>
                            </div>
                            <div>
                                <img src={java} alt='Java' />
                                <p>{t.getTranslation('skills_programming_java')}</p>
                            </div>
                            <div>
                                <img src={python} alt='Python' />
                                <p>{t.getTranslation('skills_programming_python')}</p>
                            </div>
                            <div>
                                <img src={nodejs} alt='NodeJS' />
                                <p>{t.getTranslation('skills_programming_nodejs')}</p>
                            </div>
                            <div>
                                <img src={bash} alt='Bash' />
                                <p>{t.getTranslation('skills_programming_bash')}</p>
                            </div>
                            <div>
                                <img src={git} alt='Git' />
                                <p>{t.getTranslation('skills_programming_git')}</p>
                            </div>
                        </Fade>
                    </div>
                    <div className='skill'>
                        <h1>{t.getTranslation('skills_databases')}</h1>
                        <Fade cascade direction='up' duration={150}>
                            <div>
                                <img src={mysql} alt='Mysql' />
                                <p>{t.getTranslation('skills_databases_mysql')}</p>
                            </div>
                            <div>
                                <img src={postgresql} alt='PostgreSQL' />
                                <p>{t.getTranslation('skills_databases_postgresql')}</p>
                            </div>
                            <div>
                                <img src={oracle} alt='Oracle' />
                                <p>{t.getTranslation('skills_databases_oracle')}</p>
                            </div>
                            <div>
                                <img src={prisma} alt='Prisma' />
                                <p>{t.getTranslation('skills_databases_prisma')}</p>
                            </div>
                            <div>
                                <img src={amazonaws} alt='Amazon AWS' />
                                <p>{t.getTranslation('skills_databases_amazons3')}</p>
                            </div>
                        </Fade>
                    </div>
                    <div className='skill'>  
                        <h1>{t.getTranslation('skills_systemAndNetwork')}</h1>
                        <Fade cascade direction='up' duration={150}>
                            <div>
                                <img src={unix} alt='Unix' />
                                <p>{t.getTranslation('skills_systemAndNetwork_unix')}</p>
                            </div>
                            <div>
                                <img src={docker} alt='Docker' />
                                <p>{t.getTranslation('skills_systemAndNetwork_docker')}</p>
                            </div>
                            <div>
                                <img src={webserver} alt='Web server' />
                                <p>{t.getTranslation('skills_systemAndNetwork_webServer')}</p>
                            </div>
                            <div>
                                <img src={sshserver} alt='SSH server' />
                                <p>{t.getTranslation('skills_systemAndNetwork_sshServer')}</p>
                            </div>
                            <div>
                                <img src={api} alt='API' />
                                <p>{t.getTranslation('skills_systemAndNetwork_api')}</p>
                            </div>
                        </Fade>
                    </div>
                    <div className='skill'>
                        <h1>{t.getTranslation('skills_projectManagement')}</h1>
                        <Fade cascade direction='up' duration={150}>
                            <div>
                                <img src={figma} alt='Figma' />
                                <p>{t.getTranslation('skills_projectManagement_figma')}</p>
                            </div>
                            <div>
                                <img src={github} alt='Github' />
                                <p>{t.getTranslation('skills_projectManagement_github')}</p>
                            </div>
                            <div>
                                <img src={ganttproject} alt='Gantt Project' />
                                <p>{t.getTranslation('skills_projectManagement_ganttProject')}</p>
                            </div>
                            <div>
                                <img src={googlesuite} alt='Google suite' />
                                <p>{t.getTranslation('skills_projectManagement_googleSuite')}</p>
                            </div>
                            <div>
                                <img src={asciidoc} alt='Asciidoc' />
                                <p>{t.getTranslation('skills_projectManagement_asciidoc')}</p>
                            </div>
                            <div>
                                <img src={clickup} alt='ClickUp' />
                                <p>{t.getTranslation('skills_projectManagement_clickup')}</p>
                            </div>
                        </Fade>
                    </div>
            </fieldset>
        </section>
    )
}
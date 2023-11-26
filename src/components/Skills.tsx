import '../styles/skills.scss'
import { Fade } from 'react-awesome-reveal';

export const Skills = () => {
    return (
        <section className="skills">
            <fieldset>
                <legend>Skills</legend>
                    <div className='skill'>
                        <h1>Programming</h1>
                        <Fade cascade direction='up' duration={75}>
                            <div>
                                <img src='/images/icons/skills/programming/vuejs.svg' alt='VueJS' />
                                <p>VueJS</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/programming/angular.svg' alt='Angular' />
                                <p>Angular</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/programming/react.svg' alt='React' />
                                <p>React</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/programming/svelte.svg' alt='Svelte' />
                                <p>Svelte</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/programming/symfony.svg' alt='Symfony' />
                                <p>PHP / Symfony</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/programming/java.svg' alt='Java' />
                                <p>Java</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/programming/python.svg' alt='Python' />
                                <p>Python</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/programming/bash.svg' alt='Bash' />
                                <p>Bash</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/programming/git.svg' alt='Git' />
                                <p>Git</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/programming/nodejs.svg' alt='NodeJS' />
                                <p>NodeJS</p>
                            </div>
                        </Fade>
                    </div>
                    <div className='skill'>
                        <h1>Databases</h1>
                        <Fade cascade direction='up' duration={150}>
                            <div>
                                <img src='/images/icons/skills/databases/mysql.svg' alt='Mysql' />
                                <p>MySQL</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/databases/postgresql.svg' alt='PostgreSQL' />
                                <p>PostgreSQL</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/databases/oracle.svg' alt='Oracle' />
                                <p>Oracle</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/databases/prisma.svg' alt='Prisma' />
                                <p>Prisma</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/databases/amazonaws.svg' alt='Amazon AWS' />
                                <p>Amazon S3</p>
                            </div>
                        </Fade>
                    </div>
                    <div className='skill'>  
                        <h1>System and network</h1>
                        <Fade cascade direction='up' duration={150}>
                            <div>
                                <img src='/images/icons/skills/systemAndNetwork/unix.svg' alt='Unix' />
                                <p>Unix</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/systemAndNetwork/docker.svg' alt='Docker' />
                                <p>Docker</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/systemAndNetwork/webserver.svg' alt='Web server' />
                                <p>Web server</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/systemAndNetwork/sshserver.svg' alt='SSH server' />
                                <p>SSH server</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/systemAndNetwork/api.svg' alt='API' />
                                <p>API</p>
                            </div>
                        </Fade>
                    </div>
                    <div className='skill'>
                        <h1>Project management</h1>
                        <Fade cascade direction='up' duration={150}>
                            <div>
                                <img src='/images/icons/skills/projectManagement/figma.svg' alt='Figma' />
                                <p>Figma</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/projectManagement/github.svg' alt='Github' />
                                <p>Github</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/projectManagement/ganttproject.svg' alt='Gantt Project' />
                                <p>Gantt Project</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/projectManagement/googlesuite.svg' alt='Google suite' />
                                <p>Google suite</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/projectManagement/asciidoc.svg' alt='Asciidoc' />
                                <p>Asciidoc</p>
                            </div>
                            <div>
                                <img src='/images/icons/skills/projectManagement/clickup.svg' alt='ClickUp' />
                                <p>ClickUp</p>
                            </div>
                        </Fade>
                    </div>
            </fieldset>
        </section>
    )
}
import '../styles/projects.scss'
import { Fade } from 'react-awesome-reveal'

export const Projects = () => {
    return (
        <section className="projects" id='projects'>
            <fieldset>
                <legend>Projects</legend>
                <a href="https://github.com/EuroguessrTeam/Euroguessr/" target="_blank" className='project'>
                    <Fade cascade direction='up' duration={150}>
                        <div className='content'>
                            <h1>Euroguessr <img src="/images/icons/open-external.svg" alt="Open external" /></h1>
                            <p>This site was created with the main aim of entertaining Eurovision fans, and enabling the community to test their knowledge of the contest, as well as discovering new sounds they didn't know about.</p>
                        </div>
                    </Fade>
                    <div className='technologies'>
                        <Fade cascade direction='up' duration={150}>
                            <div className='technology'>
                                <img src="/images/icons/skills/programming/csharp.svg" alt="C#" />
                                <p>C#</p>
                            </div>
                            <div className='technology'>
                                <img src="/images/icons/skills/programming/react.svg" alt="React" />
                                <p>React</p>
                            </div>
                            <div className='technology'>
                                <img src="/images/icons/skills/programming/dotnet.svg" alt="Dot Net" />
                                <p>Dot Net</p>
                            </div>
                            <div className='technology'>
                                <img src="/images/icons/skills/systemAndNetwork/docker.svg" alt="Docker" />
                                <p>Docker</p>
                            </div>
                            <div className='technology'>
                                <img src="/images/icons/skills/databases/postgresql.svg" alt="PostgreSQL" />
                                <p>PostgreSQL</p>
                            </div>
                        </Fade>
                    </div>
                </a>
                <a href="https://github.com/IUT-Blagnac/sae3-01-devapp-g2a-7" target="_blank" className='project'>
                    <Fade cascade direction='up' duration={150}>
                        <div className='content'>
                            <h1>REVIVE <img src="/images/icons/open-external.svg" alt="Open external" /></h1>
                            <p>
                            E-commerce site whose aim is to sell reconditioned products online.
                            All products must be stored in a warehouse, and the site must be able to manage stock and quantity.
                            An IoT application was created to monitor ambient conditions in REVIVE's warehouses by processing data retrieved from sensors over an MQTT network.
                            </p>
                        </div>
                    </Fade>
                    <div className='technologies'>
                        <Fade cascade direction='up' duration={150}>
                            <div className='technology'>
                                <img src="/images/icons/skills/programming/php.svg" alt="PHP" />
                                <p>PHP</p>
                            </div>
                            <div className='technology'>
                                <img src="/images/icons/skills/programming/java.svg" alt="Java" />
                                <p>Java</p>
                            </div>
                            <div className='technology'>
                                <img src="/images/icons/skills/programming/python.svg" alt="Python" />
                                <p>Python</p>
                            </div>
                            <div className='technology'>
                                <img src="/images/icons/skills/databases/mysql.svg" alt="MySQL" />
                                <p>MySQL</p>
                            </div>
                        </Fade>
                    </div>
                </a>
                <a href="https://github.com/IUT-Blagnac/sae2022-bank-1b03/" target="_blank" className='project'>
                    <Fade cascade direction='up' duration={150}>
                        <div className='content'>
                            <h1>Daily Bank <img src="/images/icons/open-external.svg" alt="Open external" /></h1>
                            <p>This application is used to manage bank deposit accounts for previously created customers. It can be used to debit or credit an account, either by bank transfer or by an individual at a counter.</p>
                        </div>
                    </Fade>
                    <div className='technologies'>
                        <Fade cascade direction='up' duration={150}>
                            <div className='technology'>
                                <img src="/images/icons/skills/programming/java.svg" alt="Java" />
                                <p>Java</p>
                            </div>
                            <div className='technology'>
                                <img src="/images/icons/skills/databases/mysql.svg" alt="MySQL" />
                                <p>MySQL</p>
                            </div>
                        </Fade>
                    </div>
                </a>
                <a href="https://github.com/Furiza31/Camellia-Discord-bot" target="_blank" className='project'>
                    <Fade cascade direction='up' duration={150}>
                        <div className='content'>
                            <h1>Camellia <img src="/images/icons/open-external.svg" alt="Open external" /></h1>
                            <p>Camellia is a Discord bot that allows you to manage your server, and add fun commands to it.</p>
                        </div>
                    </Fade>
                    <div className='technologies'>
                        <Fade cascade direction='up' duration={150}>
                            <div className='technology'>
                                <img src="/images/icons/skills/programming/nodejs.svg" alt="NodeJS" />
                                <p>NodeJS</p>
                            </div>
                        </Fade>
                    </div>
                </a>
                <a href="https://github.com/EuroguessrTeam/Euroguessr/" target="_blank" className='project'>
                    <Fade cascade direction='up' duration={150}>
                        <div className='content'>
                            <h1>Project Tarot <img src="/images/icons/open-external.svg" alt="Open external" /></h1>
                            <p>This is a point counter for tarot games. It also displays the details of each round of each game.</p>
                        </div>
                    </Fade>
                    <div className='technologies'>
                        <Fade cascade direction='up' duration={150}>
                            <div className='technology'>
                                <img src="/images/icons/skills/programming/angular.svg" alt="Angular" />
                                <p>Angular</p>
                            </div>
                            <div className='technology'>
                                <img src="/images/icons/skills/systemAndNetwork/api.svg" alt="API" />
                                <p>JSON API</p>
                            </div>
                        </Fade>
                    </div>
                </a>
            </fieldset>
        </section>
    )
}
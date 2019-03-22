import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navigation = props =>

    <section className="navigation">
        <div className="nav-container">
    <div className="brand">
        <span><a href="#!">0</a></span>
        <span><a title="linkedin" href="#"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a></span>
        <span><a title="github" href="#"><FontAwesomeIcon icon={['fab', 'github']} /></a></span>
        <span><a title="behance" href="#"><FontAwesomeIcon icon={['fab', 'behance']} /></a></span>
    </div>
    <nav>
        <div className="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
        <ul className="nav-list">
            <li>
                <a href="#!">Projects</a>
                <ul className="nav-dropdown">
                {
                    props.projects.map((project, index) => {
                        return <li>
                                <a href="#">
                                    {project.navTitle}
                                </a>
                            </li>
                    })
                }
                {/* <li>
                    <a href="#!">Web Design</a>
                </li>
                <li>
                    <a href="#!">Web Development</a>
                </li>
                <li>
                    <a href="#!">Graphic Design</a>
                </li>
                </ul> */}
                </ul>
            </li>
        </ul>
    </nav>
    </div>
    </section>;

export default Navigation;
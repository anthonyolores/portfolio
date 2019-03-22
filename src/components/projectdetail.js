import React, { Component } from 'react';
import '../App.scss';
import SectionContainer from './sectioncontainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ProjectDetail extends Component{

 constructor() {
    super();
    this.state = {detail: null} 

}

render() {
    let detail = this.props.detail;
    return (
        <div>
        {
           (detail != null && this.props.showDetail)?
                <div>
                    <section className="detail-banner-container">
                        <div className="detail-banner-img"
                            style={{backgroundImage:"url(" + detail.image + ")"}}>
                            <div className="detail-banner-shadow"></div>
                            <div className="detail-banner-text-container">
                                <div className="detail-banner-title"><h1>{detail.title}</h1></div>
                                <div className="detail-banner-description"><p>{detail.description}</p></div>        
                                <div className="detail-banner-techs">
                                {
                                    detail.techs.map((tech, index) => {
                                        return <span 
                                        key={index}>
                                            {tech}
                                        </span>
                                    })
                                }
                                </div>       
                                <div className="detail-banner-demo">
                                    <button>Live Demo</button>
                                </div>        
                            </div>
                            <span className="page-info">{this.props.pageInfo}</span>
                        </div>       
                        <button className="back" onClick={this.props.stepProject.bind(this, -1)}>
                            <FontAwesomeIcon icon={['fa', 'angle-left']} /> &nbsp;Previous
                        </button>                   
                        <button className="next" onClick={this.props.stepProject.bind(this, 1)}>
                            Next &nbsp;<FontAwesomeIcon icon={['fa', 'angle-right']} />
                        </button>       
                    </section>      
                    {
                        detail.sections.map((section, index) => {
                            return <SectionContainer 
                            key={index}
                            title={section.title}
                            text={section.text}
                            image={section.image}
                            images={section.images}
                            position={section.position}
                            direction={section.direction}
                            />
                        })
                    }             
                </div>
                :''
        }
        </div>
    );
  }


}
export default ProjectDetail;
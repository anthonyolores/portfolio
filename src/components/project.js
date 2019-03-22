import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Project extends Component{

    constructor() {
        super();
    }
   
    render() {
        return (
            <div className="thumb-item">
                <div onClick={this.props.showDetail.bind(this, this.props.index)} className="thumb-img" style={{backgroundImage: "url(" + this.props.project.image + ")"}}>
                    {/* <img alt={this.props.author} src={this.props.src + this.props.id}></img> */}
                </div>
                <div className="thumb-text-container">
                    <div onClick={this.props.showDetail.bind(this, this.props.index)} className="thumb-title">{this.props.project.title}</div>
                    <div onClick={this.props.showDetail.bind(this, this.props.index)} className="thumb-desc">{this.props.description + ' ' + this.props.project.description}</div>
                    <div className="thumb-links">
                        <span onClick={this.props.projectLink.bind(this, 3)}>
                            <a  title="github" href="#"><FontAwesomeIcon className="github" icon={['fab', 'github']} /></a>
                        </span>               
                        <span onClick={this.props.projectLink.bind(this, 2)}>
                            <a title="behance" href="#"><FontAwesomeIcon className="behance" icon={['fab', 'behance']} /></a>
                        </span>       
                        <span className="preview" onClick={this.props.projectLink.bind(this, 1)}>
                            Live Demo
                        </span>
                        <span className={`preview status`}>
                            <span> {this.props.project.status==2?'Completed': (this.props.project.status==1?'On-going': 'Not Started')}</span>
                        </span>      
                    </div>  
                </div>
            </div>
        );
      }
    
    
    }
    export default Project;
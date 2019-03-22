import React, { Component } from 'react';
import Project from './project';
import '../App.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class ProjectList extends Component{

constructor() {
    super();
    this.state = {
        imgs: [],
        loadingState: true
    };
}

componentDidMount() {
    this.performSearch();
}

performSearch = () => {
    setTimeout(() => 
    { 
        axios
        .get(
            'https://picsum.photos/list/?blur'
        )
        .then(data => {
            this.setState({ imgs: data.data.splice(0,3), loadingState: false });
            console.log(data.data);
        })
        .catch(err => {
            console.log('Error happened during fetching!', err);
        });
    }, 2000);

};    

render() {
    return (
        <div className="thumb-container">
        {
        this.state.loadingState
            ? <div className="loading"><h3><FontAwesomeIcon className="github" icon={['fa', 'hourglass-half']} /> &nbsp;Loading...</h3></div>
            : this.props.projects.map((project, index) => {
                return <Project 
                key={index}
                index={index}
                project={project}
                projectLink={this.props.projectLink}
                showDetail={this.props.showDetail}
                />
            })
        }
        </div>
    );
  }


}
export default ProjectList;
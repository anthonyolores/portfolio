import React, { Component } from 'react';
import nav from "./scripts/nav.js";
import Navigation from './components/navigation';
import ProjectList from './components/projectlist';
import SectionContainer from './components/sectioncontainer';
import Footer from './components/footer';
import ProjectDetail from './components/projectdetail';

import { library } from '@fortawesome/fontawesome-svg-core'
import {faBehance, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faAngleLeft, faAngleRight, faHourglassHalf} from '@fortawesome/free-solid-svg-icons'
library.add(
  faBehance, 
  faLinkedinIn, 
  faGithub,
  faAngleLeft,
  faAngleRight,
  faHourglassHalf
)


class App extends Component {
  details = [
    {
      title: "Surface Studio in Action1",
      description: "This specialised auto accessories maker is known for craftsmanship and innovation. With Surface, they're achieving new levels of creativity.",
      techs: ["Node","React","SCSS","Javascript","HTML","Redux","Inkspace","VS Code"],
      status: 1,
      image: "https://picsum.photos/1500/800?image=453",
      navTitle: "Development",
      sections: [
          {
              title: "Ringbrothers",
              text: "This specialized auto accessories maker is known for craftsmanship and innovation. With Surface, they're achieving new levels of creativity.",
              image: "https://picsum.photos/1500/800?image=445",
              position: 0, //0=column, otherwise=row
              direction: 1, //0=image left-right, otherwise=right-left
              images: []
          }
      ]           
    },
    {
      title: "Surface Studio in Action2",
      description: "This specialised auto accessories maker is known for craftsmanship and innovation. With Surface, they're achieving new levels of creativity.",
      techs: ["Node","React","SCSS","Javascript","HTML","Redux","Inkspace","VS Code"],
      status: 2,
      image: "https://picsum.photos/1500/800?image=341",
      navTitle: "Software Engineering",
      sections: [
          {
              title: "Ringbrothers",
              text: "This specialized auto accessories maker is known for craftsmanship and innovation. With Surface, they're achieving new levels of creativity.",
              image: "https://picsum.photos/1500/800?image=674",
              position: 0, //0=column, otherwise=row
              direction: 0, //0=image left-right, otherwise=right-left
              images: []
          }
      ]           
    },
    {
      title: "Surface Studio in Action3",
      description: "This specialised auto accessories maker is known for craftsmanship and innovation. With Surface, they're achieving new levels of creativity.",
      techs: ["Node","React","SCSS","Javascript","HTML","Redux","Inkspace","VS Code"],
      status: 3,
      image: "https://picsum.photos/1500/800?image=364",
      navTitle: "Technology",
      sections: [
          {
              title: "Ringbrothers",
              text: "This specialized auto accessories maker is known for craftsmanship and innovation. With Surface, they're achieving new levels of creativity.",
              image: "https://picsum.photos/1500/800?image=96",
              position: 0, //0=column, otherwise=row
              direction: 0, //0=image left-right, otherwise=right-left
              images: []
          }
      ]           
    }    
  ];
  constructor() {
    super();
    this.state = {
      detailIndex: -1,
      showDetail: false
    };
    this.showDetail = this.showDetail.bind(this);
    this.stepProject = this.stepProject.bind(this);
    this.projectLink = this.projectLink.bind(this);
  }

  showDetail = (index, e) => {
    this.setState({
      detailIndex: index,
      showDetail: true
    });
  }

  projectLink = (type, e) =>{
    if(type === 1){
      alert("Live Demo");
    }
    else if(type === 2){
      alert("Behance");
    }
    else if(type === 3){
      alert("Github");
    }
  }

  stepProject(step){
    let newIndex = 0;
    let currentIndex = this.state.detailIndex;
    //next
    if(step === 1){
      if(currentIndex === (this.details.length-1)){
        newIndex = -1;
      }
      else{
        newIndex = currentIndex + 1;
      }
    }
    //previous
    else{
      if(currentIndex === 0){
        newIndex = -1;
      }
      else{
        newIndex = currentIndex - 1;
      }
    }

    this.setState({
      detailIndex: newIndex,
      showDetail: newIndex===-1?false:true
    });

  }

  componentDidMount() {
    nav();
  }
  
  render() {
    return (
      <div className="App">
        <Navigation projects={this.details}/>
        <div className="wrapper">
        {
          !this.state.showDetail?
            <div>
              <SectionContainer title={'Projects'} text={"List of projects!"} />        
              <ProjectList projects={this.details} showDetail={this.showDetail} projectLink={this.projectLink}/>              
              <SectionContainer title={'Car Search'} text={"List of open sourced projects that I've done lately, all of them are hosted in a free hosting platform so please excuse if there's any lag. Most of these projects are just prototypes, case studies, and some were used for my personal needs in my day to day journey. If some might benefit you just do follow the link from github for the source code or check the live demonstration if there's any. Thanks for dropping by!"} />        
            </div>
          :
            <ProjectDetail 
            pageInfo={`${this.state.detailIndex+1} of ${this.details.length}`}
            detail={this.details[this.state.detailIndex]} 
            showDetail={this.state.showDetail}
            stepProject={this.stepProject}/>
        }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

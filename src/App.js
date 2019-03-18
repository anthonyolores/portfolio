import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import nav from "./scripts/nav.js";

class App extends Component {
  render() {
    nav();
    return (
      <div className="App">
     <section className="navigation">
        <div className="nav-container">
          <div className="brand">
            <a href="#!">Logo</a>
          </div>
          <nav>
            <div className="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
            <ul className="nav-list">
              <li>
                <a href="#!">Home</a>
              </li>
              <li>
                <a href="#!">About</a>
              </li>
              <li>
                <a href="#!">Services</a>
                <ul className="nav-dropdown">
                  <li>
                    <a href="#!">Web Design</a>
                  </li>
                  <li>
                    <a href="#!">Web Development</a>
                  </li>
                  <li>
                    <a href="#!">Graphic Design</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#!">Pricing</a>
              </li>
              <li>
                <a href="#!">Portfolio</a>
                <ul className="nav-dropdown">
                  <li>
                    <a href="#!">Web Design</a>
                  </li>
                  <li>
                    <a href="#!">Web Development</a>
                  </li>
                  <li>
                    <a href="#!">Graphic Design</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#!">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
    </section>     
    <div className="wrapper">
        <div className="landing">
          <div className="landingWrapper">
            <div className="landingText">
              <h1>Landing Title</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable..
              </p>
              <button className="landing-btn">Call Action</button>
            </div>
            <div className="landingImage">
              <img src='https://images.unsplash.com/photo-1547271137-2446db1e4436?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80' alt="This is the alt image"/>
            </div>
          </div>
        </div>         
    </div>   
    <footer><p>Copyright &copy; 2019 Company</p></footer>
    </div>
    );
  }
}

export default App;

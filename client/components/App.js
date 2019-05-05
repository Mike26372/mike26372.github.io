import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TransitionGroupPlus from 'react-transition-group-plus';
import FontAwesomeWebpack from 'font-awesome-webpack';

import styles from './App.css';

import ColorPicker from './ColorPicker/ColorPicker.js';
import Nav from './Nav/Nav.js';
import Splash from './Splash/Splash.js';
import Content from './Content/Content.js';
import About from './About/About.js';
import Traits from './Traits/Traits.js';
import Tech from './Tech/Tech.js';
import Projects from './Projects/Projects.js';
import Info from './Info/Info.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
      index: 0,
      height: null,
      width: null,
      sections: 2,
      color: '#262626'
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.updateColor = this.updateColor.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    let { innerHeight, innerWidth } = window;
    this.setState({ height: innerHeight, width: innerWidth });
  }

  componentDidUpdate() {
    window.scrollTop = 0;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }

  handleScroll(e) {
    let { scrollTop } = event.target.body;
    let { sections, height, width, index } = this.state;
    let totalHeight = sections * height;
    let newIndex = Math.floor((scrollTop / totalHeight) * sections);
    if (newIndex !== index) {
      this.setState({ index: newIndex });
    }
  }

  handleResize(e) {
    let { innerWidth, innerHeight } = window;
    this.setState({ height: innerHeight, width: innerWidth });
  }

  toggleShow(e) {
    this.setState({ show: true });
  }

  updateColor(newHex) {
    this.setState({ color: newHex });
  }

  render() {
    let { show, index, color } = this.state;
    return (
      <div>
        <Nav
          show={show}
          toggleShow={this.toggleShow}
          updateColor={this.updateColor}
        />
        <Splash show={show} color={color} />
        <About show={show} />
        <Traits show={show} />
        <Tech show={show} />
        <Projects show={show} />
        <Info show={show} />
      </div>
    );
  }
}

export default App;

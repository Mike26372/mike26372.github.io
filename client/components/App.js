import { Component } from 'react';

import styles from './App.css';

import Nav from './Nav/Nav.js';
import Splash from './Splash/Splash.js';
import Content from './Content/Content.js';

class App extends Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    let { scrollTop } = event.target.body;
    console.log(scrollTop);
  }

  render() {
    return (
      <div>
        <Nav />
        <Splash />
        <Content />
      </div>
    )
  }
}

export default App;
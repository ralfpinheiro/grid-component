import React, { Component } from 'react'
import Navbar from "../navbar/Navbar";

import GlobalStyle from '../../styles/global';

class Header extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <>
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />
      </>
    )
  }
}

export default Header;
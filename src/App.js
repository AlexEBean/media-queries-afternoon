import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      dropDownVisible: false
    }
  }

  toggleDropDown = () => {
    this.setState ( (prevState) => {
      return {
        dropDownVisible: !prevState.dropDownVisible
      }
    })
  }

  render () {
    return (
      <div className = "container">
        <header>
          <img className = "bootstrap" href = "https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" src = "https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"/>
          <ul className = "items">
            <a href = "https://startbootstrap.github.io/startbootstrap-agency/#services" >SERVICES</a>
            <a href = "https://startbootstrap.github.io/startbootstrap-agency/#portfolio" >PORTFOLIO</a>
            <a href = "https://startbootstrap.github.io/startbootstrap-agency/#portfolio" >ABOUT</a>
            <a href = "https://startbootstrap.github.io/startbootstrap-agency/#team" >TEAM</a>
            <a href = "https://startbootstrap.github.io/startbootstrap-agency/#contact">CONTACT</a>
          </ul>
          <button className = "menu" onClick = {this.toggleDropDown}>MENU &#9776;</button>
        </header>
        <main>
        {this.state.dropDownVisible ? (
            <ul className="mobile">
              <a href = "https://startbootstrap.github.io/startbootstrap-agency/#services" >SERVICES</a>
              <a href = "https://startbootstrap.github.io/startbootstrap-agency/#portfolio" >PORTFOLIO</a>
              <a href = "https://startbootstrap.github.io/startbootstrap-agency/#portfolio" >ABOUT</a>
              <a href = "https://startbootstrap.github.io/startbootstrap-agency/#team" >TEAM</a>
              <a href = "https://startbootstrap.github.io/startbootstrap-agency/#contact">CONTACT</a>
            </ul>
          ) : null}
          <p className = "welcome">Welcome To Our Studio!</p>
          <p className = "meet">IT'S NICE TO MEET YOU</p>
          <a className = "tmm-button" href = "https://startbootstrap.github.io/startbootstrap-agency/#services"> TELL ME MORE</a>
        </main>
      </div>
    )
  }
}

export default App;

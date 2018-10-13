import React, { Component } from 'react';
import './App.css';
import Generer from './Generer';
import Citation from './Citation';




  const personnage = [{
    "quote": "But my mom says I'm cool.",
    "character": "Milhouse Van Houten",
    "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002",
    "characterDirection": "Right"
}];

class App extends Component {
  state = {
    donnee : personnage
  }


componentDidMount = () => {
  fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=1')
    .then(response => response.json())
    .then(response => this.setState({
    donnee : response[0]
  }));
}

  render() {
    
    return (
      <div className="App">
       <h1><Generer obtenir={this.componentDidMount}/></h1>
       <Citation employer={this.state.donnee}/>
      </div>
    )
  }
}

export default App;

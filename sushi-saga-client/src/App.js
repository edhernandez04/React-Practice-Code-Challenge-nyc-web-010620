import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Sushi from './components/Sushi'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    eaten: false,
    money: 1000
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(sushi => this.setState({sushi}))
  }

  eatSushi = (sushi) => {
    if (sushi.eaten === false && this.state.money - sushi.price >= 0) {
      sushi.setState({eaten:true})
    } 
  }

  renderSushi = () => {
   return this.state.sushi.map(sushi => <Sushi key={sushi.id} sushi={sushi} />).slice(0,4) 
  }

  moreClick = () => {
    return this.state.sushi.map(sushi => <Sushi key={sushi.id} sushi={sushi} />).slice(5,8)
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eatSushi={this.eatSushi} moreClick={this.moreClick} renderSushi={this.renderSushi}/>
        <Table money={this.state.money}/>
      </div>
    );
  }
}

export default App;
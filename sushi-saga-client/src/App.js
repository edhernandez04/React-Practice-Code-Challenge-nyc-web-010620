import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Sushi from './components/Sushi'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    ate: [],
    startIndex: 0,
    money: 100
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(sushis => this.setState({sushis}))
  }

  renderSushi = () => {
    let startIndex = this.state.startIndex
    return this.state.sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={(s) => this.eatSushi(s)} ate={this.state.ate}/>).slice(startIndex, startIndex+4) 
  }
  
  moreClick = () => {
    this.setState({startIndex: this.state.startIndex += 4})
  }
  
  eatSushi = (sushi) => {
    if (!this.state.ate.includes(sushi.id) && this.state.money >= sushi.price) {
      let copyArr = [...this.state.ate, sushi.id]
      this.setState({ate : copyArr, money : this.state.money - sushi.price})
    } else {
      alert ("Either you broke or already ate it")
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eatSushi={this.eatSushi} moreClick={this.moreClick} renderSushi={this.renderSushi}/>
        <Table money={this.state.money} ate={this.state.ate}/>
      </div>
    );
  }
}

export default App;
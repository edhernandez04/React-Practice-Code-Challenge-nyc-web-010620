import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'



const SushiContainer = (props) => {

  state = {
    eaten: false
  }

  eatSushi = (sushi) => {
    if (state.eaten === false && money - this.sushi.price > 0) {
      setState({eaten:true})
      this.sushi.img_url.remove()
      money - this.sushi.price
    } 
  }

  return (
    <Fragment>
      <div className="belt">
        { props.sushi.map(sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={(sushi) => this.eatSushi(sushi)}/>).slice(0,4) }
        <MoreButton moreClick={this.moreClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer